import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header';

import GoogleLogin from 'react-google-login';

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  AccountCircle,
  Lock,
} from '@material-ui/icons';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Header />
  </MuiThemeProvider>
);

export default App;
