import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {

    var [names,setNames] = useState(
        [
            {
                Name:"Rahul",
                Age: 15,
                Class:"S4 CSE-B"
            },
            {
                Name:"Rahul",
                Age: 15,
                Class:"S4 CSE-B"
            },
            {
                Name:"Rahul",
                Age: 14,
                Class:"S4 CSE-B"
            }
        ]
    )
  return (
    <div>
        <TableContainer style={{marginTop:"60px",background:"pink"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell>  
                        <TableCell style={{color:"blue"}}>Age</TableCell>
                        
                    </TableRow>

                </TableHead>

                <TableBody>

                    {names.map((value,index) =>  //Need curly help for outside return
                    {
                        return(
                            <TableRow>
                                <TableCell>{value.Name}</TableCell>
                                <TableCell>{value.Age}</TableCell>
                            </TableRow>


                        )

                        })}


                </TableBody>
            </Table>
        </TableContainer>


    </div>
  )
}

export default Table1