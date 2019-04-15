      <div className="App">
        <AppBar position="static" style={{ height: '77px' }}>
          <Toolbar style={{ height: '77px' }}>
            <Typography variant="h6" color="inherit">
              Planaway
            </Typography>
            <Button color="inherit">Home</Button>
          </Toolbar>
        </AppBar>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: 'calc(100vh - 77px)' }}
        >
          <Card style={{ minWidth: '300px', padding: '30px' }}>
            <CardContent>
              <form noValidate autoComplete="off">
                <FormControl style={{ width: '100%' }}>
                  <TextField
                    id="standard-name"
                    label="Username"
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>

                <FormControl style={{ width: '100%' }}>
                  <TextField
                    id="standard-name"
                    label="Password"
                    type="password"
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>

                <FormControlLabel
                  control={(
                    <Checkbox
                      value="checkedA"
                    />
                  )}
                  label="Remember Me"
                />

                <FormControl style={{ width: '100%', marginTop: '1rem' }}>
                  <Button variant="contained" color="primary" style={{ width: '100%' }}>
                    Sign In
                  </Button>
                  <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    render={renderProps => (
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ width: '100%' }}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Sign In with Google
                      </Button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                  />
                </FormControl>
              </form>
              <div>
                <Typography style={{ marginTop: '2rem' }}>
                  Or <a href='#'>Create a new account</a>
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </div>


const responseGoogle = (response) => {
  console.log(response);
};

const { GOOGLE_CLIENT_ID } = process.env;
