import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Triples from './components/Triples';
import { Button, Table } from '@mui/material';

import Table1 from './components/Table1'
import First from './components/First'
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';


function App() {
  return (
    <div className="App">

      <Navbar />



      <Routes>
        <Route path='/' element={<StateBasics />} />  
        <Route path="/Triples" element = {<Triples />} />
        <Route path = '/First' element = {<First />} />
        {/* '/' is the landing url */}
        <Route path="/Table" element = {<Table1 />} />
        <Route path = '/axios' element ={<ApiGet />} />
        {/* <Route path="Nav" element = {<Navbar />} /> */}

        

      </Routes>

     
      
    </div>
  );
}

export default App;
