import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
} from '@material-ui/core';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Typography>
      {t('Sign Up')}
    </Typography>
  );
};

export default SignUp;
