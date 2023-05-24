import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Triples = () => {

    var [pname,setPname] = useState("")

    const changeHome = () =>
    {
        setPname("Welcome to HOME")
    }
    const changeGallery = () =>
    {
        setPname("Welcome to GALLERY")
    }
    const changeContacts = () =>
    {
        setPname("Welcome to CONTACTS")
    }



  return (
    <div>
        < Typography variant='h4'>{pname}</Typography>
        <hr />
        <Button variant = "contained" color = "secondary" onClick = {changeHome}>Home</Button>
        <Button variant = "contained" color = "success" onClick = {changeGallery}>Gallery</Button>
        <Button variant = "contained" color = "error" onClick = {changeContacts}>Contacts</Button>
    </div>
  )
}

export default Triples