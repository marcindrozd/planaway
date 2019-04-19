import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  Button,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import TextField from 'components/TextField';

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
        <CardContent>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              passwordConfirmation: '',
            }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = 'Required';
              }

              if (!values.username) {
                errors.username = 'Required';
              }

              if (!values.password) {
                errors.password = 'Required';
              }

              if (!values.passwordConfirmation) {
                errors.passwordConfirmation = 'Required';
              }

              if (values.password !== values.passwordConfirmation) {
                errors.password = 'Passwords do not match';
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log('values', values);
            }}
          >
            {({
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form>
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={6}>
                    <FormControl style={{ width: '100%' }} margin="normal" error={errors.username && touched.username}>
                      <Field type="text" label="Username" name="username" component={TextField} error={errors.username && touched.username} />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl style={{ width: '100%' }} margin="normal" error={errors.email && touched.email}>
                      <Field type="email" label="Email" name="email" component={TextField} />
                    </FormControl>
                  </Grid>
                </Grid>

                <FormControl style={{ width: '100%' }} margin="normal" error={errors.password && touched.password}>
                  <Field type="password" label="Password" name="password" component={TextField} />
                </FormControl>

                <FormControl style={{ width: '100%' }} margin="normal" error={errors.passwordConfirmation && touched.passwordConfirmation}>
                  <Field type="password" label="Password Confirmation" name="passwordConfirmation" component={TextField} />
                </FormControl>

                <FormControl style={{ width: '100%' }} margin="normal">
                  <Button type="submit" variant="contained" color="primary" style={{ width: '100%' }} disabled={isSubmitting}>
                    Sign Up
                  </Button>
                </FormControl>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SignUp;
