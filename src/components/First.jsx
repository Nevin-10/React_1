//rafce and type, to get the snippet

import React from 'react'
import { Button, Switch, TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div>
      <div style={{marginTop:"150px",background:"lightcyan"}} >
    <h1>Nevin is here!!!</h1>
      <input placeholder="Name" />
      <br />
      <input type = "password" placeholder="Password" />
      <br />

      <button>SUBMIT</button>

      <br />

      <Typography variant="h1">Nevin Thomas Kovoor</Typography>
      <br />

      <TextField variant = "outlined" label = "Outlined-Text" />

      <Button variant="contained">SUBMIT</Button>
      </div>
      
      

    </div>
    
  )
}

export default First