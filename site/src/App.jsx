
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashbord from './dashbord/Dashbord'
import Post from './dashbord/Post'
import Catagory from './dashbord/Comments'
import Category from './dashbord/Category'
import Homedashbord from './dashbord/Homedashbord'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
   

   <ToastContainer />
<Routes>
  <Route path='/' element={<Dashbord/>}>
  <Route index  element={<Homedashbord/>}/>
    <Route path='post' element={<Post/>}/>
    <Route path='comments' element={<Catagory/>}/>
    <Route path='category' element={<Category/>}/>

  </Route>
</Routes>
   
    </>
  )
}

export default App
