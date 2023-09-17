// import { useContext } from "react"
// import { useForm } from "react-hook-form"
// import { Post } from "../../httprequest/Httprequest"
// import Swal from "sweetalert2"
// import {AuthContext} from "../../auth/AuthContext"
// import { useNavigate } from "react-router-dom"

// export default function LoginForm() {
//     const { register, handleSubmit } = useForm()
//     const url = 'http://localhost:3055'
//     const {signin} = useContext(AuthContext);
//     const navigate = useNavigate()

//     const cbRedirect = () => {
//         navigate('/requests')
//     };

//   const cbResponse = (response) => {
//     console.log('>>>>>',response);
//     if (response.name != '' ) {
//         localStorage.setItem('userInfo', JSON.stringify(response));
//         signin(response, cbRedirect)
//         Swal.fire({
//         position: 'top',
//         icon: 'success',
//         title: 'Te has registrado correctamente',
//         showConfirmButton: true,
//         timer: 3000
//       })
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Ocurrio un error intentalo nuevamente',
//         text: 'Ocurrio un error',
//         // position: 'top-end',
//         // showConfirmButton: false,
//         // timer: 3000

//       })
//     }
//   }
//   const onSubmit = (data) => {Post(`${url}/auth/login`, data, cbResponse)}


//   return (
//     <div className="flex justify-center items-center h-full border-cyan-600 border-double">
//     <form className="bg-slate-100 flex flex-col" onSubmit={handleSubmit(onSubmit)}>

//       <label className="bg-slate-900 text-white text-center">correo</label>
//       <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("email", { required: true, maxLength: 20 })}placeholder=" email" type="email"/>

//       <label className="bg-slate-900 text-white text-center">contraseña</label>
//       <input className="rounded-lg border-2 row-span-2 mb-5 bg-slate-200" {...register("password", { required: true, maxLength: 20 })}placeholder=" contraseña" type="password"/>

//       <input type="submit" className="bg-sky-600 rounded-lg"/>
//     </form>
//     </div>
//   )
// }

import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Box, Button, Alert, TextField, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ childToParentData }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertOne, setAlertOne] = useState(false);
  const [alertTwo, setAlertTwo] = useState(false);
  const [data, setData] = useState('')
  const navigate = useNavigate();
  const URL = 'https://integrator-project-back-end.onrender.com';

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };
  const OnChangeUser = (event) => { setEmail(event.target.value) };
  const OnChangePassword = (event) => { setPassword(event.target.value) };
  const redirectToHome = () => { navigate('/') }

  const login = () => {
    if (email === '' || password === '') {
      setAlertOne(true)
      AlertOneTimeOut()
    } else {
      axios.post(`${URL}/auth/login`, { email, password })
        .then((response) => {
          setData(response.data)
          childToParentData(data)
          navigate('/requests')
          setEmail('')
          setPassword('')
        })
        .catch((err) => {
          setEmail('')
          setPassword('')
          setData('')
          setAlertTwo(true)
          AlertTwoTimeOut()
          childToParentData(data)
        });
    }
  }

  const AlertOneTimeOut = () => {
    setTimeout(() => {
      setAlertOne(false);
    }, 3000);
  }
  const AlertTwoTimeOut = () => {
    setTimeout(() => {
      setAlertTwo(false);
    }, 3000);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={{
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '30rem',
        width: '20rem',
        borderRadius: '3%',
        backgroundImage: 'linear-gradient(to top left, blue, red, blue)'

      }}>

        {alertOne && <Alert severity="warning">debes de llenar los campos</Alert>}
        {alertTwo && <Alert severity="error">Correo Electrónico o Contraseña incorrectos</Alert>}

        <Typography variant='h3' sx={{ fontWeight: 100, fontFamily: 'Rubik Puddles', color: '#1876D2', textAlign: 'center' }}>Inicio de Sesion</Typography>
        <Box sx={{ minWidth: 275 }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >

            <TextField
              color='primary'
              variant='outlined'
              label="Correo Electrónico"
              id="outlined"
              value={email}
              onChange={OnChangeUser}
              sx={{ m: 1, width: '25ch' }}
            />

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
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
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={login}
            >iniciar sesion</Button>

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{ marginTop: .5 }}
              onClick={redirectToHome}>
              regresar
            </Button>

          </div>
        </Box>
      </div>
    </div>
  )
}

export default Login;