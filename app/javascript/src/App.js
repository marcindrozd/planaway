import React from 'react';

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
} from '@material-ui/icons'

import './stylesheets/reset.scss';
import './stylesheets/application.scss';

const App = () => (
  <div className="App">
    <AppBar position="static" color="default" style={{ backgroundColor: '#3b3a36', color: 'white', height: '77px' }}>
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
      style={{ height: 'calc(100vh - 77px)', backgroundColor: '#e9ece5' }}
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
              <Button variant="contained" color="primary" style={{ backgroundColor: '#c0dfd9', width: '100%' }}>
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
);

export default App;
