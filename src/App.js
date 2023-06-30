
import { useState } from 'react';
import './App.css';
import { FiEdit } from "react-icons/fi"
import { RiDeleteBinLine } from "react-icons/ri"
import image1 from './r.png'
import image2 from './r3.png'
import image3 from './r2.png'
import image4 from './rl.png'

function App() {
  
  return (
    <div className='full'>
    
    <div className="app">
      
     <div className='app1'> <p className='para'>Backed by the best</p></div>
     <div className='app2'><p className='para1'>Wealthup is backed and supported by</p>
     <img className='img1' src={image1}/></div>

    </div>
    <div className='app3'>
   

    </div>
    
    <div className="sapp">
      <p className='sfont'>Transforming Lives - Financially!</p>
      <img className='img2' src={image2}/>
      <img className='img3' src={image3}/>

     </div>
     <div className="tapp"> 
     <img className='img4' src={image4}/>
     
      </div>
    </div>
  
  );
}

export default App;
