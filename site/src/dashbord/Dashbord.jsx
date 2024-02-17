import React from 'react'
import { useRef } from 'react';



import { Button } from 'primereact/button';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Dashbord() {



    return (
        <>

            <div className='p-8 bg-black'>
                <div className="grid  ">


                    <aside className="shadow-2 border-radiou bg-white col-12 lg:col-3 sm:col-12 lg:ml-3 xl:ml-2  lg:mb-0 p-44 sm:mb-5">
                        <Link to='/'><h2 className='text-center'>Dashbord</h2></Link>
                        <ul className='  list-none rounded bg-[##21262C]'>

                            <li><Link to="post" className=''>Post</Link></li>

                            <li><Link to="comments">Comments</Link></li>
                            <li className='mb-8'><Link to="category">category</Link></li>
                            <li><Link>Logout</Link></li>

                        </ul>
                    </aside>
                    <main className="lg:ml-4  col-12 bg-white border-radiou shadow-2  col-12 lg:col-8 xl:ml-8  sm:col-12">
                        <div className=" text-center">
                            <Outlet />
                        </div>
                    </main>

                </div>
            </div>





        </>
    )
}

export default Dashbord