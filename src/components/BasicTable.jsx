import React, { useState, useEffect, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { LanguageContext } from '../contexts'
import { Axios } from 'axios';

export default function BasicTable() {
  const [data, setData] = useState([]);
  const URL = 'https://integrator-project-back-end.onrender.com';
  const {language}=useContext(LanguageContext)

  useEffect(()=>{
    getData()
  },[])

  const config = {
    headers:{
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYTEiLCJwYXNzd29yZCI6InBydWViYTEiLCJpYXQiOjE2ODkxMjk2NzF9.ZTJ1g5I-QX78CnvBAquzj-luFShUe-j2SDgVTt09QMc'
    }
  };
  const getData = async () => {
    try{
      const {data: response} = await axios.get(`${URL}/form/show-data`, config)
      setData(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{language.requests.tabletitles[0]}</TableCell>
            <TableCell>{language.requests.tabletitles[1]}</TableCell>
            <TableCell>{language.requests.tabletitles[2]}</TableCell>
            <TableCell>{language.requests.tabletitles[3]}</TableCell>
            <TableCell>{language.requests.tabletitles[4]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.request}</TableCell>
              <TableCell>{row.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}