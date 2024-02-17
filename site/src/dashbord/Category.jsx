import React from 'react'
import { useState } from 'react'

import { useRef } from 'react';
import { Editor } from 'primereact/editor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button';
import { toast } from 'react-toastify';
function Category() {
  const successmsg = () => toast("comments succesfully added ");

  const [category, setcategory] = useState('')
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate()




  const hamdelbtn = () => {
    if (category == '') {
    
    } else {
      setIsButtonEnabled(false)
      axios.post('http://localhost:4002/user/categories/creat', {

        name: category



      }
      )

        .then(function (response) {
          console.log(response.status)
          if (response.status == 200) {
            successmsg()
            setcategory('')
            setTimeout(() => {
             
              


            }, 6000);
          }

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

  }
 
  return (
    <div>

      <div className=' border mx-auto py-3 px-7'>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="formgrid grid">
            <div className="field col-12">
              <label >Add Category</label>
              <input id="firstname6" type="text" value={category} onChange={(e) => {
                const value = e.target.value
                setcategory(value)
                setIsButtonEnabled(value !== '')
              }} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            </div>
          </div>

        </form>

        <Button label="submit" onClick={hamdelbtn} disabled={!isButtonEnabled} />




      </div>
    </div>
  )
}

export default Category