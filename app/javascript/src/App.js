import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';

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

import './stylesheets/application.scss';

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
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>

  </React.Fragment>
);

export default App;
