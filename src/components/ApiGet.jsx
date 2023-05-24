import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

//axios fetch content outside (API) fetch,get fetch outside

const ApiGet = () => {

    var [users,setUsers] = useState([]) //Expected array
    //First seen data on useEffect, eg:Loading anel cirular turn
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
         
         setUsers(response.data)
         console.log(response.data)
    })
    .catch(err =>console.log(err))
    
    })                          //Unnamed arrow useEffect hooks
    
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>

               </TableHead>
               <TableBody>
            
                    {users.map((value,index)=>
                    {
                        return(
                        <TableRow key={index}> 

                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.username}</TableCell>
                            <TableCell>{value.email}</TableCell>
                        </TableRow>
                        )


                    }
                )}

               </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ApiGet