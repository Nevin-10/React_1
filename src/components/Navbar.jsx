import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{paddingTop:"100px"}}>
        <AppBar style={{background:"black"}}>
            <Toolbar >
                
                <Typography sx={{ flexGrow: 1 }} color= {'pink'} >New App!!</Typography>
                
                <Button variant = "contained" color="warning" size="small">
                  <Link to = {'/'} style = {{textDecoration:'none',color:'white'}}>HOME</Link></Button>
                <Button variant = "contained" color="warning" size="small">
                  <Link to = {'/First'} style = {{textDecoration:'none',color:'white'}}>FIRST</Link></Button>
                <Button variant = "contained" color="warning" size="small">
                  <Link to = {'/Table'} style = {{textDecoration:'none',color:'white'}}>TABLE</Link></Button>

                  <Button variant = "contained" color="warning" size="small">
                  <Link to = {'/axios'} style = {{textDecoration:'none',color:'white'}}>Axios</Link></Button>
            
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar