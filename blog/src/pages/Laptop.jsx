import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Laptop() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4002/user/software').then((res)=>{
// console.log(res.data.data)
setPost((res.data.data))
console.log(post)
        })

    },[])
  return (
  <>
  <h1 align="center">Software</h1>
  {
    (post.length==0)?(<div className="loading">
    <div class="text-center mx-auto d-inline-block d-flex justify-content-center bg-transparent">
      <div class="spinner-border text-danger position-absolute top-50 z-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>):""
}
{
   post.map((element,index)=>{
    
   return (   <div className="card mb-3 mx-auto mt-5" style={{ maxWidth: 1000 }}>
   <div className="row g-0">
     <div className="col-md-4">
       <img src={`${element.imageUrl}`} className="img-fluid rounded-start" alt="..." width={300}/>
     </div>
     <div className="col-md-8">
       <div className="card-body">
         <h5 className="card-title">{element.title}</h5>
         <p className="card-text">
           This is a wider card with supporting text below as a natural lead-in
           to additional content. This content is a little bit longer.
         </p>
         <p className="card-text">
           <small className="text-muted">Last updated 3 mins ago</small>
         </p>
       </div>
     </div>
   </div>
 </div>)
     
    
    

    })
}
   
  </>
  )
}

export default Laptop