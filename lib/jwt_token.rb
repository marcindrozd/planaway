class JwtToken
  def self.encode(payload)
    JWT.encode(payload, ENV.fetch("SECRET_KEY_BASE"))
  end

  def self.decode(token)
    payload = JWT.decode(token, ENV.fetch("SECRET_KEY_BASE"))[0]
    HashWithIndifferentAccess.new(payload)
  rescue StandardError
    nil
  end
end
