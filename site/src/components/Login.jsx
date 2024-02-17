import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigator = useNavigate();
    const {isLogin, setIsLogin} = useContext(MyContext);

    const onSubmit = () => {
        axios.post("http://localhost:4000/login", { email: email, password: password}).then( (res) => {
            console.log(res.data);
            if(res.data.status == "success") {
                localStorage.setItem("token", res.data.token);
                setIsLogin(true);
                navigator("/dashboard")
            } else {
                alert("not logged in")
            }
        })
    }
    return (
        <div className="container w-50">
            <form onSubmit={e => e.preventDefault()} >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={onSubmit} className='mt-2 btn btn-outline-warning'>Login</button>
            </div>
        </form>
      </div >
      
    )
}

export default Login