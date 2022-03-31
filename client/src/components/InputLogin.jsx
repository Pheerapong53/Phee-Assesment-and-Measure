import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

export default function InputLogin() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


  return(
  <React.Fragment>
        <Box  sx={{  display: 'flex' ,justifyContent: 'center' , alignItems: 'center',flexDirection: 'column'} }>
        <FormControl sx={{ m: 1, width: '500px' }} variant="outlined">
          <InputLabel htmlFor="outlined">E-mail</InputLabel>
          <OutlinedInput
            id="outlined"
            label="E-mail"
          />
          
        </FormControl>
        <FormControl sx={{ m: 1, width: '500px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Box>
  </React.Fragment>
  );
}
