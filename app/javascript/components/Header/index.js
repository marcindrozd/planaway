import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';

import styles from './styles.module.scss';

const Header = () => (
  <AppBar position="static">
    <Toolbar className={styles.toolbar}>
      <Typography variant="h6" color="inherit" className={styles.title}>
        Planaway
      </Typography>
      <Button color="inherit">
        Sign Up
      </Button>
      <Button color="inherit">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
