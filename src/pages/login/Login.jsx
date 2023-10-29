import { useState, useContext } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CircularProgress, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Box, Button, Alert, TextField, Typography, Stack } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext, LanguageContext } from '../../contexts/';

const Login = () => {

  const { isLogged, setIslogged } = useContext(LoginContext);
  const { language, getLanguage } = useContext(LanguageContext)
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('')
  const navigate = useNavigate();
  const URL = 'https://integrator-project-back-end.onrender.com';

  const [emptyFieldsAlert, setEmptyFieldsAlert] = useState(false);
  const [wrongEmailOrPasswordAlert, setWrongEmailOrPasswordAlert] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };
  const OnChangeUser = (event) => { setEmail(event.target.value) };
  const OnChangePassword = (event) => { setPassword(event.target.value) };
  const redirectToHome = () => { navigate('/') }

  // const login = () => {
  //   if (email === '' || password === '') {
  //     setEmptyFieldsAlert(true)
  //     AlertTimeOut(300)
  //   } else {
  //     axios.post(`${URL}/auth/login`, { email, password })
  //       .then((response) => {
  //         setData(response.data)
  //         // childToParentData(data)
  //         console.log(response.data.token);
  //         // setIslogged(true)
  //         setEmail('')
  //         setPassword('')
  //       })
  //     // .catch((err) => {
  //     //   setEmail('')
  //     //   setPassword('')
  //     //   setData('')
  //     //   setWrongEmailOrPasswordAlert(true)
  //     //   AlertTwoTimeOut()
  //     //   // childToParentData(data)
  //     // });
  //   }
  // }

  function login() {
    if (email !== '' || password !== "") {
      axios.post(`${URL}/auth/login`, { email, password })
        .then((response) => {
          setData(response)
          if (data.data == "Wrong Password" || data.data == "Wrong Email") {
            alert("Wrong password or Email")
          } else {
            if (data.data.token != undefined ) {
              navigate('/requests')    
              localStorage.setItem('session', JSON.stringify(data.data.token))
            }
          }
        })
    } else {
      setEmptyFieldsAlert(true)
    }
  }

  const AlertTimeOut = ({ timeout }) => {
    setTimeout(() => {
      setEmptyFieldsAlert(false)
    }, timeout);
  }

  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'space-evenly',
        justifyContent: 'space-evenly',
        height: '100vh',
      }}
    >
      <div style={{
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '3%',
        width: '20rem',
        backgroundImage: 'linear-gradient(to top left, blue, red, blue)'
      }}>

        <section style={{ paddingTop: "15%" }}>
          <Typography variant='h3' sx={{ fontWeight: 100, fontFamily: 'Rubik Puddles', color: '#1876D2', textAlign: 'center' }}>{language.login.logintitle}</Typography>
        </section>

        <section>
          {emptyFieldsAlert && <Alert severity="warning">{language.login.emptyFieldsAlert}</Alert>}
          {wrongEmailOrPasswordAlert && <Alert severity="error">{language.login.wrongEmailOrPasswordAlert}</Alert>}
        </section>

        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: "10%",
          paddingTop: wrongEmailOrPasswordAlert ? 0 : "10%",
          paddingTop: emptyFieldsAlert ? 0 : "10%"
        }}
        >
          <TextField
            color='primary'
            variant='outlined'
            label={language.login.emailfield}
            id="outlined"
            value={email}
            onChange={OnChangeUser}
            sx={{ m: 1, width: '25ch' }}
          />

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{language.login.passwordfield}</InputLabel>
            <OutlinedInput
              value={password}
              onChange={OnChangePassword}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </section>

        <section style={{ paddingBottom: "15%", }}>
          <div
            style={{
              margin: "auto",
              paddingLeft: "20%",
              paddingRight: "20%",
              display: "flex", flexDirection: getLanguage.includes("cn") ? "row" : "column",
            }}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{ margin: "auto", marginTop: .5, width: "fit-content" }}
              onClick={login}
            >{language.login.loginbutton}</Button>

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{ margin: "auto", marginTop: .5, width: "fit-content" }}
              onClick={redirectToHome}>
              {language.login.returnbutton}
            </Button>
          </div>
        </section>

        <CircularProgress size={100} sx={{position:"inherit"}}/>

      </div>
    </main>
  )
}

export default Login;