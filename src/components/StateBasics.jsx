import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {

    var [pname,setPname] = useState("Nevin")
    
    //useState is the react hook //setPname is the function that responsible for altering pname
    var [val,setVal] = useState();                                              //Used forr saving the value of search

    // const changeName = () =>
    // {
    //     if(pname === "Nevin")
      
    //     setPname("Maya")
    //     }
    //     else
    //     {
    //         setPname("Nevin")
    //     }

   // }

    const inputHandler = (event) => //Capturing event
    {
      setVal(event.target.value)


    }
    const changeName = () =>
    {
      setPname(val)
      setVal("") //Setting value manually in text field-val changes
    }
  return (

    
    <div style={{marginTop:"60px"}}>
        <Typography variant='h4' >Hello {pname} </Typography>  
        <br />
        {/* To use javascript variable */}

         <TextField variant='outlined' value = {val} onChange = {inputHandler} label = 'Name' /> 
         {/* Default textfield value */}
         {/* onChange keyboard function  */}

        <Button variant = "contained" onClick = {changeName}>Change</Button>  
        {/* To use Js function {} */}
    </div>
  )
}

export default StateBasics