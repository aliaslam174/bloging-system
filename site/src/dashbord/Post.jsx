import React from 'react'
import { useState } from 'react'

import { useRef } from 'react';
import { Editor } from 'primereact/editor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button';
import { useEffect } from 'react';
function Post() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setcategory] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate()
  const [excerpt, setExcerpt] = useState('')
  const toast = useRef(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4002/user/categories/all").then((res) => {
      setCategories(res.data);
    })
  }, [])

  const hamdelbtn = () => {
    if (title == '' || body == '' || category == '' || image == '' || excerpt == '') {
      alert('Empty Field')
    } else {

      axios.post(`${import.meta.env.VITE_API_SERVER_URL}/user/createpost`, {
        title: title,
        body: body,
        category: category,
        image: image,
        excerpt: excerpt


      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

        .then(function (response) {
          console.log(response.data)
          if (response.data.status == true) {
            navigate('/')
          }




          // handle success
          // setName('')
          // setPrice('')
          // setcategory('')
          // setImage('')


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

  }
  const onUpload = () => {
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  return (
    <div>

      <div className=' border mx-auto py-3 px-7'>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="formgrid grid">
            <div className="field col-12 ">
              <label >Title</label>
              <input id="firstname6" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            </div>

            <div className="field col-12 ">
              <label >Excerpt</label>
              <input id="firstname6" type="text" value={excerpt} onChange={(e) => { setExcerpt(e.target.value) }} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            </div>



            <div className="field col-12 ">
              <label htmlFor="state">Catagory</label>
              <select id="state" onChange={(e) => { setcategory(e.target.value) }} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" >
              <option >selct</option>
                {
                  categories.map((cat) => {
                    return <option value={cat.name}>{cat.name}</option>
                  })
                }

              </select>
            </div>
            <div class="field col-12 ">
              <label for="zip">image</label>
              <input id="zip" type="file" onChange={(e) => { setImage(e.target.files[0]) }} class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            </div>
            <div className="card mx-auto">
              <Editor value={body} onTextChange={(e) => setBody(e.htmlValue)} style={{ height: '300px' }} className='mb-3' />
            </div>
          </div>

        </form>
        {/* <button  type="button" onClick={hamdelbtn}>


          <span role="status">{(loding == false ? "creat product" : "loding....")}</span>
        </button> */}
        <Button label="submit" onClick={hamdelbtn} />




      </div>
    </div>
  )
}

export default Post