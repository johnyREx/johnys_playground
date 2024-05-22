import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter Personal Details</Typography>
            </Toolbar>
          </AppBar>
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button
            variant="contained"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails;
