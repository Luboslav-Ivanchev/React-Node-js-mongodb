import React  from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Login.css"


import {useState} from 'react';

import {useNavigate} from 'react-router-dom'

function Login() {

    let navigate=useNavigate()

    const[username, setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [repeatPassword,setRepeatPassword]=useState('');
    const [login,setLogin]=useState(false);
    const [loginNot,setLoginNot]=useState(false);
    const [name,setName]=useState(false);
    const [emailValidation,setEmailValidation]=useState(false);
    const [passwordValidation,setPasswordValidation]=useState(false);
    const [repeatPasswordValidation,setRepeatPasswordValidation]=useState(false)
   const handler=()=>{
      let object={
          name:username,
          email:email,
          password:password,
          repeatPassword:repeatPassword
      }

      fetch(`http://localhost:7000/login`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(object)
      }).then(res=>res.json())
          .then(data=>{
              if('LoggedIn Successfully'===data.message){
                  setLogin(true)
              }

              if('Please enter all the details!'===data.message){
                  setLoginNot(true)
              }

          }).catch(e=>{

      })


       fetch(`http://localhost:7000/getPeoples`).then(res=>res.json())
           .then(data=>{
               data.user.forEach(object=>{

                   if(username===object.name && email===object.email && object.password===password && object.repeatPassword===repeatPassword){

                       navigate("/loggedIn/my-profile")
                        localStorage.setItem('email',email)
                   }

                   if(username===''){
                       setName(true)
                   }

                   if( username!==object.name){
                       setName(true)
                   }


                   if( email===''){
                       setEmailValidation(true)
                   }

                   if(email!==object.email){
                       setEmailValidation(true)
                   }

                   if(password===''){
                       setPasswordValidation(true)
                   }

                   if(password!==object.password){
                       setPasswordValidation(true)
                   }


                   if(repeatPassword!==object.repeatPassword){
                       setRepeatPasswordValidation(true)
                   }
                   if(repeatPassword===''){
                       setRepeatPasswordValidation(true)
                   }


               })
           })



   }

    return(
     <body>
     <section className="vh-100">
         <div className="container-fluid h-custom">
             <div className="row d-flex justify-content-center align-items-center h-100">
                 <div className="col-md-9 col-lg-6 col-xl-5">
                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                          className="img-fluid" alt="Phone image"/>

                 </div>
                 <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                     <form>
                         <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                             <p className="lead fw-normal mb-0 me-7" id="sign">Login Form</p>
                         </div>
                           <br/>
                         <div className="form-outline mb-4">
                             <label className="form-label" htmlFor="form3Example3">Name</label>
                             <input type="email" id="form3Example3" className="form-control form-control-lg"
                              value={username} onChange={(e)=>setUsername(e.target.value)}
                                    placeholder="Enter your username"/>

                             {name?
                                 <p className='error'>The name is wrong!</p>
                             :""}

                         </div>

                         <div className="form-outline mb-4">
                             <label className="form-label" htmlFor="form3Example3">Email address</label>
                             <input type="email" id="form3Example3" className="form-control form-control-lg"
                               value={email} onChange={(e)=>setEmail(e.target.value)}   placeholder="Enter a valid email address"/>

                             {name?
                                 <p className='error'>Email is wrong!</p>
                                 :""}

                         </div>

                         <div className="form-outline mb-3">
                             <label className="form-label" htmlFor="form3Example4">Password</label>
                             <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    value={password} onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Enter password"/>
                             {passwordValidation ?
                                 <p className='error'>Password is wrong!</p>
                                 :""}
                         </div>


                         <div className="form-outline mb-3">
                             <label className="form-label" htmlFor="form3Example4">Password</label>
                             <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)}
                                    placeholder="Enter repeat password"/>
                             {repeatPasswordValidation ?
                                 <p className='error'>Repeat password is wrong!</p>
                                 :""}
                         </div>

                         <div className="d-flex justify-content-between align-items-center">

                             <div className="form-check mb-0">
                                 <input className="form-check-input me-2" type="checkbox" value=""
                                        id="form2Example3"/>
                                 <label className="form-check-label" htmlFor="form2Example3">
                                     I am not a robot!
                                 </label>
                             </div>
                             <a href="/forgot-password" className="text-primary">Forgot password?</a>
                         </div>

                         <div className="text-center text-lg-start mt-4 pt-2">
                             <button type="button" className="btn btn-primary btn-lg" onClick={handler}>Login
                             </button>
                             <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                 <a href="/register" className="text-primary">Register</a>
                             </p>

                             {login ?
                                 <p className='login'>LoggedIn Successfully!</p>
                             :""}

                             {loginNot ?
                                 <p className='error'>Please enter all the details!</p>
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
     <br/>
     <br/>
     <br/>
     <br/>
     </body>

    )

}


export default Login;