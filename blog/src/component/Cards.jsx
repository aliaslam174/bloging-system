import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import createDOMPurify from 'dompurify'
import { Link ,useParams} from 'react-router-dom'
function Cards(props) {
  const [post, setPost] = useState([])
  const DOMPurify = createDOMPurify(window)
  const params = useParams();
// const query={}
//   if (params.category !== undefined) {
//     query['category'] = category;
// }



  useEffect(() => {
    axios.get(`http://localhost:4002/user/posts/${ (params.category !== undefined) ? params.category : ''}`).then((res) => {
      // console.log(res.data.data)
      setPost((res.data.data))
      console.log(post)
    })

  }, [params.category])
  // if (post.length === 0) {
  //   return <div className="loading">
  //     <div class="text-center mx-auto d-inline-block d-flex justify-content-center bg-transparent">
  //       <div class="spinner-border text-danger position-absolute top-50 z-3" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   </div>

  return (
    <>


      {
        (post.length == 0) ? (<div className="loading">
          <div class="text-center mx-auto d-inline-block d-flex justify-content-center bg-transparent">
            <div class="spinner-border text-danger position-absolute top-50 z-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>) : ""
      }

      
      {
        post.map((element, index) => {

          return (

            <div className="card mb-3 mx-auto mt-5 border-0 bg-body-secondary" style={{ maxWidth: 1110 }}>
              <div className="row g-0 ">
                <div className="col-md-4 border-0 d-flex justify-content-end">
                  <img src={`http://localhost:4002/${element.image}`} className="img-fluid rounded-start" alt="..." width={200} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className='fw-medium'>{element.category}</p>
                    <h4 className="card-title fw-bold">{element.title}</h4>


                    <p>{element.excerpt}</p>

                    <Link to={`/detailpage/${element._id}`} className='un' >Read more</Link>
                  </div>
                </div>
              </div>
            </div>)




        })
      }



    </>
  )
}

export default Cards