import React from "react"

import {useState} from "react";

import axios from "axios";

import emailJs from '@emailjs/browser';

import '../Styles/forgot-password.css';

function ForgotPassword() {

    const [email,setEmail]=useState('');
  const [send,setSend]=useState(false);
    const [error,setError]=useState(false);
    const handler=(event)=>{
        event.preventDefault()

        axios.get(`http://localhost:7000/getPeoples`)
            .then(res=>{
                res.data.user.forEach(object=>{
                    if(email===object.email){

        localStorage.setItem('email',email)
                        let  templateParams = {
                            username: `${object.userName}`,
                            host: '12620116@nvna.eu',
                            name: `${object.name}`,
                            message:`http://localhost:3000/reset-password`,
                        };

                        emailJs.send('service_k4d7h5i','template_dj761kj',templateParams,'KLjNClI88IvD6G47G')
                            .then(function(response) {
                                setSend(true)
                            }, function(err) {

                            });

                    }else{
                        setError(true)
                    }
                })
            })
    }

    return(
        <body>
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center
          min-vh-100">
                <div className="col-12 col-md-8 col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="mb-4">
                                <h5>Forgot Password?</h5>
                                <p className="mb-2">Enter your registered email ID to reset the password
                                </p>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" className="form-control" name="email"
                                     value={email} onChange={(e)=>setEmail(e.target.value)}      placeholder="Enter Your Email"
                                           required=""/>
                                </div>
                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary" onClick={handler}>
                                        Reset Password
                                    </button>

                                </div>
                                <span>Don't have an account? <a href="/login">Register </a></span>
                            </form>


                            {send && <p className='send'>Send it successfully!</p>}
                            {error && <p className='error'> Something is wrong!</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>

)

}

export default ForgotPassword;