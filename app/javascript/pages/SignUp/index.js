import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Grid,
  Card,
  CardHeader,
  Typography,
} from '@material-ui/core';

import styles from './styles.module.scss';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={styles.container}
    >
      <Card className={styles.card}>
        <CardHeader title={t('Sign Up')} />
      </Card>
    </Grid>
  );
};

export default SignUp;
