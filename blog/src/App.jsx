import { useState } from 'react'

import './App.css'
import Navigation from './component/Navigation'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './component/Cards';
import Blogsec from './component/Blogsec';
import Mobile from './component/Mobile';
import Laptop from './pages/Laptop';
import Detailpage from './pages/Detailpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [product,setProduct]=useState('')

  return (
    <>

<ToastContainer />
  
   <div className='body'>



   <Navigation />
  


     <Routes>
       {/* <Route path='/' element={ <Blogsec />}/> */}
       <Route path="/:category?" element={ <Blogsec  setProduct={setProduct}/>} />

       {/* <Route path="/cetagory/:category" element={<Mobile />} /> */}
       {/* <Route path="/cetagory/software"  element={<Laptop/>} /> */}
       <Route path="/detailpage/:id"  element={<Detailpage/>} />
     </Routes>
   </div>
     
    


    </>
  )
}

export default App
