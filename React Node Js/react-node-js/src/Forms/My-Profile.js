import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/My-Profile.css"

import  { useEffect, useState } from "react";

import axios from 'axios'

function MyProfile() {

    let email=localStorage.getItem('email')

    useEffect(()=>{
     axios.get(`http://localhost:7000/getPeoples`)
         .then(res=>{
            res.data.user.forEach(object=>{
               if(email===object.email){
                   localStorage.setItem('id',object._id)
                   localStorage.setItem('name',object.name)
                   localStorage.setItem('password',object.password)
                   localStorage.setItem('repeatPassword',object.repeatPassword)
                   localStorage.setItem('userName',object.personalInformation.userName)
                   localStorage.setItem('addressLine',object.personalInformation.addressLine)
                   localStorage.setItem('city',object.personalInformation.city)
                   localStorage.setItem('country',object.personalInformation.country)
                   localStorage.setItem('phoneNumber',object.personalInformation.phoneNumber)
                   localStorage.setItem('postcode',object.personalInformation.postcode)
                   localStorage.setItem('securityQuestion',object.personalInformation.securityQuestion)

               }

            })
         }).catch(e=>{
         console.log(e)

     })
    },[])


    let name=localStorage.getItem('name')
   let password= localStorage.getItem('password')
    let repeatPassword=localStorage.getItem('repeatPassword')
    let username=localStorage.getItem('userName')
    let addressLine=localStorage.getItem('addressLine')
    let city=localStorage.getItem('city')
    let country=localStorage.getItem('country')
    let phoneNumber=localStorage.getItem('phoneNumber')
   let postcode=localStorage.getItem('postcode')
    let securityQuestion=localStorage.getItem('securityQuestion')
     let id=localStorage.getItem('id')



    const [show,setShow]=useState(false)



    return(

        <body>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="my-5">
                        <h3>My Profile</h3>
                        <hr/>
                    </div>

                    <form className="file-upload" >
                        <div className="row mb-5 gx-5">
                            <div className="col-xxl-8 mb-5 mb-xxl-0">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0">Contact details</h4>
                                        <div className="col-md-6">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" placeholder=""  aria-label="First name"
                                             value={name} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Last name" value={email}  />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Password</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number" value={password}  />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Repeat password</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number" value={repeatPassword}  />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4" className="form-label">Username</label>

                                                <input type="email" className="form-control" id="inputEmail4"
                                                     value={username}     />

                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   value={phoneNumber}   />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">AddressLine</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   value={addressLine}  />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"  value={city}   />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Country</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   value={country}  />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Postcode</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"  value={postcode}  />
                                        </div>
                                        <div className="col-md-6">
                                        <label className="form-label">Security question</label>
                                        <input type="text" className="form-control" placeholder=""
                                               aria-label="Phone number" value={securityQuestion} />
                                    </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-xxl-4">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                                        <div className="text-center">
                                            <div className="square position-relative display-2 mb-3">
                                                <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>

                                            <label className="btn btn-success-soft btn-block"
                                                   htmlFor="customFile">Upload</label>
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            <button type="button" className="btn btn-danger-soft">Remove</button>

                                            <p className="text-muted mt-3 mb-0">
                                                <span className="me-1">Note:</span>
                                                Minimum size 300px x 300px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gap-3 d-md-flex justify-content-md-end text-center">
                            <button type="button" className="btn btn-primary btn-lg" data-key={id} onClick={()=>setShow(!show)}>Update profile</button>

                            <button type="button" className="btn btn-danger btn-lg" data-key={id} onClick={HandlerDelete}>Delete profile</button>

                        </div>
                    </form>

                </div>
            </div>
            <br/>
                <br/>
            <br/>
            <br/>
            {show && <div className="row">
                <div className="col-12">
                    <div className="my-5">
                        <h3>My Profile</h3>
                        <hr/>
                    </div>

                    <form className="file-upload" >
                        <div className="row mb-5 gx-5">
                            <div className="col-xxl-8 mb-5 mb-xxl-0">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0">Contact details</h4>
                                        <div className="col-md-6">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" placeholder=""  aria-label="First name"
                                                   defaultValue={name} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Last name" defaultValue={email}  />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Password</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number" defaultValue={password}  />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Repeat password</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number" defaultValue={repeatPassword}  />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="inputEmail4" className="form-label">Username</label>

                                            <input type="email" className="form-control" id="inputEmail4"
                                                   defaultValue={username}     />

                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   defaultValue={phoneNumber}   />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">AddressLine</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   defaultValue={addressLine}  />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   defaultValue={city} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Country</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"   defaultValue={country}  />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Postcode</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number"  defaultValue={postcode}  />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Security question</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number" defaultValue={securityQuestion} />
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-xxl-4">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                                        <div className="text-center">
                                            <div className="square position-relative display-2 mb-3">
                                                <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>

                                            <label className="btn btn-success-soft btn-block"
                                                   htmlFor="customFile">Upload</label>
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            <button type="button" className="btn btn-danger-soft">Remove</button>

                                            <p className="text-muted mt-3 mb-0">
                                                <span className="me-1">Note:</span>
                                                Minimum size 300px x 300px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gap-3 d-md-flex justify-content-md-end text-center">
                            <button type="button" className="btn btn-primary btn-lg" data-key={id} onClick={HandlerUpdating}>Updating profile</button>
                        </div>
                    </form>

                </div>
            </div>}

        </div>
        <br/>
            <br/>
                <br/>
        </body>

    )

}





function HandlerDelete(event) {

}


function HandlerUpdating(event) {

    let  id=event.target.getAttribute('data-key');
    let inputs=document.querySelectorAll('.form-control')
    let arrayInputs=Array.from(inputs)
    let name=arrayInputs[11].value;
    let email=arrayInputs[12].value;
    let password=arrayInputs[13].value;
    let repeatPassword=arrayInputs[14].value;
    let username=arrayInputs[15].value;
    let phoneNumber=arrayInputs[16].value;
    let addressLine=arrayInputs[17].value;
    let city=arrayInputs[18].value;
    let country=arrayInputs[19].value;
    let postcode=arrayInputs[20].value
    let securityQuestion=arrayInputs[21].value;


    let object={
        name:name,
        email:email,
        password:password,
        repeatPassword:repeatPassword,
        personalInformation: {
            userName:username,
            phoneNumber:phoneNumber,
            addressLine: addressLine,
            city: city,
            country:country,
            postcode: postcode,
            securityQuestion: securityQuestion
        }
    }

    fetch(`http://localhost:7000/sendPeople/${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }).then(()=>{
        window.location.reload()
    }).catch(e=>{
        console.log(e)
    })


}



export default MyProfile;