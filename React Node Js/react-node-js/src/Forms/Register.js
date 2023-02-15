import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Register.css"

import {useState} from 'react';

 export default function Register() {

     const [username,setUsername]=useState('');
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [repeatPassword,setRepeatPassword]=useState('');
     const [errorAll,setErrorAll]=useState(false)
   const [error,setError]=useState(false);
      const [errorEmail,setErrorEmail]=useState(false)
     const [errorUsername,setErrorUsername]=useState(false)
     const [errorPassword,setErrorPassword]=useState(false)
     const [errorRepeatPassword,setErrorRepeatPassword]=useState(false)
     const [registerSuccessfully,setRegister]=useState(false)
     const handler=()=>{
         let object={
             name:username,
             email:email,
             password:password,
             repeatPassword:repeatPassword,
             personalInformation: {
                 userName:'',
                 phoneNumber:'',
                 addressLine: '',
                 city: '',
                 country: '',
                 postcode: '',
                 securityQuestion:'',
             }
         }


         let jsonObject=JSON.stringify(object);

         fetch(`http://localhost:7000/sendPeople`,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(object)
         }).then(res=>res.json())
             .then(data=>{
                 if(data.message==='User registered successfully'){
                     setRegister(true)
                 }

             }).catch(e=>{
             console.log(e)
         })




         if(username==='' && email==='' && password==='' && repeatPassword===''){
              setErrorAll(true)

          }

          let validationEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

          if(!email.match(validationEmail)){
              setError(true)
          }

          fetch(`http://localhost:7000/getPeoples`).then((res)=>res.json())
              .then((data)=>{
                  data.user.forEach(objects=>{
                     if(objects.email===email){
                         setErrorEmail(true)
                     }
                  })
              })

         if(username===''){
             setErrorUsername(true)
         }
          if(password===''){
              setErrorPassword(true)
          }

          if(repeatPassword===''){
              setErrorRepeatPassword(true)
          }


     }

    return(

        <body>
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                             className="img-fluid" alt="Sample image"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-7" id="sign">Register Form</p>
                            </div>
                            <br/>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Name</label>
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                      value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder="Enter your Name"/>
                                {errorUsername ?
                                    <p className="ptag">Username input must be filled!</p>:""}

                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                       value={email} onChange={(e)=>setEmail(e.target.value)}   placeholder="Enter a valid email address"/>

                                {error ?
                                    <p className="ptag">Email must be valid!</p>:""}
                                {errorEmail ?
                                    <p className="ptag">User exist with this email! Enter a different email address!</p>:""}

                            </div>


                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                       value={password} onChange={(e)=>setPassword(e.target.value)}    placeholder="Enter password"/>
                                {errorPassword ?
                                    <p className="ptag">Password input must be filled!</p>:""}

                            </div>

                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Repeat Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                           value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)}    placeholder="Enter repeat-password"/>

                                {errorRepeatPassword ?
                                    <p className="ptag">Repeat password input must be filled!</p>:""}

                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value=""
                                           id="form2Example3"/>
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        I am not a robot!
                                    </label>
                                </div>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg" onClick={handler}>Register
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                    <a href="/login" className="text-primary" >Login</a>
                                </p>

                                {errorAll ?
                                    <p className="ptag">Must enter all details!</p>:""}

                                {registerSuccessfully ?
                                    <p className='register'>User registered successfully!</p>

                                :""}

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </body>

    )
}
