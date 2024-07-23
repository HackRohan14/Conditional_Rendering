import React, { useState } from 'react'
import explorer from "./data/data";
import Folder from './components/Folder';

const App = () => {
  const[data,setdata]=useState(explorer);
  return (
    <div className='App'>
        <Folder explorer={data}/>
    </div>
  )
}

export default App
