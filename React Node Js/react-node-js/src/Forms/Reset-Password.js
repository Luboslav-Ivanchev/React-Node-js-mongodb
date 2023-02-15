import React from "react";
import MyProfile from "./My-Profile";
import axios from "axios";
import {useState} from "react";
import "../Styles/Reset.css";
function ResetPassword() {

    const [password,setPassword]=useState('')
    const [repeatPassword,setRepeatPassword]=useState('')
    const [showIfPasswordAreEqual,setEqual]=useState(false)
    const [showIfPasswordsAreNotEqual,setAreNotEqual]=useState(false)

    function handler(event) {


        event.preventDefault()
        let email=localStorage.getItem('email')

        axios.get(`http://localhost:7000/getPeoples`)
            .then(res=>{
                res.data.user.forEach(object=>{
                   if(email===object.email){
                      let id=object._id;

                     if(password===repeatPassword){
                       setEqual(true)

                         let data={
                             name:"Luboslav",
                             email:"12620116@nvna.eu",
                             password:password,
                             repeatPassword:repeatPassword,
                             personalInformation: {
                                 userName:"lubacheto",
                                 phoneNumber:"09788756",
                                 addressLine: "odrin",
                                 city: "VARNA",
                                 country: "Bulgaria",
                                 postcode: "98009e",
                                 securityQuestion: "Why me?"
                             }
                         }

                         fetch(`http://localhost:7000/sendPeople/${id}`,{
                             method: 'POST',
                             headers: {
                                 'Content-Type': 'application/json'
                             },
                             body: JSON.stringify(data)
                         })


                     }else{
                         setAreNotEqual(true)
                     }

                   }
                })
            }).catch(e=>{
            console.log(e)
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
                                <h5>Reset Password?</h5>
                                <p className="mb-2">Enter your new password
                                </p>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Password</label>
                                    <input type="email" id="email" className="form-control" name="email"
                                           value={password} onChange={(e)=>setPassword(e.target.value)}      placeholder="Enter Your new password"
                                           required=""/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Repeat password</label>
                                    <input type="email" id="email" className="form-control" name="email"
                                           placeholder="Enter Your new repeat password"
                                           value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)}  required=""/>
                                </div>
                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary" onClick={handler}>
                                        Changing your password!
                                    </button>

                                </div>
                            </form>

                            {showIfPasswordAreEqual?
                            <p className="equal">Successfully updating your password!</p>:""}
                            {showIfPasswordsAreNotEqual?
                                <p className="wrong">Successfully updating your password!</p>:""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>

    )

}


export default ResetPassword;
