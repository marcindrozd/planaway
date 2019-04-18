import React from 'react';
import { TextField as MaterialTextField, FormHelperText } from '@material-ui/core';

const TextField = ({
  field,
  form: { touched, errors },
  ...props,
}) => {
  return (
    <>
      <MaterialTextField
        {...field}
        {...props}
      />

      {errors[field.name] && touched[field.name] && (
        <FormHelperText>
          {errors[field.name]}
        </FormHelperText>
      )}
    </>
  )
}

export default TextField;
