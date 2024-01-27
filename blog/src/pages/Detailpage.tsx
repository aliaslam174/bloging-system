import React from 'react'

import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import createDOMPurify from 'dompurify'
import { toast } from 'react-toastify';

function Detailpage() {
    const [product, setproduct] = useState('')
    const [title, setTitle] = useState('')
    const [update, setUpdate] = useState(false)
    const [allcomment, setAllcomment] = useState([])
    const [comments, setComments] = useState('')
    const [loading, setLoading] = useState(false)
    const parems = useParams()
    const DOMPurify = createDOMPurify(window)
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const successmsg = () => toast("comments succesfully added ");


    useEffect(() => {
        axios.get(`http://localhost:4002/user/getpostbyid/${parems.id}`).then((res) => {
            console.log(res.data.data)
            setproduct((res.data.data))

        })

    }, [])

    useEffect(() => {
        axios.get(`http://localhost:4002/user/postcomments/${parems.id}`).then((res) => {
            console.log(res.data.data)

            setAllcomment(res.data.data)
            setUpdate(false)
        })

    }, [update])

    const hamdelbtn = () => {

        if (comments === '') {
            alert('Empty Field')
        } else {
            // setLoading(true)
            setIsButtonEnabled(false)
            axios.post('http://localhost:4002/user/createcomments', {
                comment: comments,
                postid: parems.id


            })

                .then(function (response) {
                    if (response.status == 200) {
                        successmsg()
                        setTimeout(() => {
                            setUpdate(true)
                            setComments('')
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
        <>
            <Container>
                <Row className=''>
                    <Col sm={10} className='mx-auto my-5' >
                        <Card style={{ width: '100%' }} className='border-0  px-5'>
                            <Card.Img variant="top" src={`http://localhost:4002/${product.image}`} className='w-75 mx-auto mt-5 mb-5' />
                            <Card.Body className='mx-auto'>
                                <Card.Title className='fs-2 fw-bolder mb-3'>{product.title}</Card.Title>
                                <Card.Text>
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.body) }} />
                                 
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={10} className='mx-auto my-5'>
                        <div className=' bg-white p-5'>

                            <h4>Leave a Comment</h4>
                            <form onSubmit={(e) => { e.preventDefault() }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" className='my-5' placeholder='Type here ...' rows={10} value={comments} onChange={(e) => {
                                        const value = e.target.value
                                        setComments(value)
                                        setIsButtonEnabled(value !== '');
                                    }} />
                                </Form.Group>

                            </form>




                            <button className="btn btn-primary" type="button" disabled={!isButtonEnabled} onClick={hamdelbtn}>
                                {
                                    (loading == true) ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : ''
                                }

                                <span role="status">{(loading == false ? "Comment" : "loding....")}</span>
                            </button>


                        </div>

                    </Col>
                </Row>
            </Container>


           
            <div className="row g-0">

<div className="col-lg-10 mx-auto">
                {


                    allcomment.map((element, index) => {

                        return (


                           
                                    <div className="card-body">
                                        <p className="card-title">{element.comment}</p>




                                    </div>
                            
                            )




                    })
                }
                    </div>

</div>
            


        </>
    )
}

export default Detailpage