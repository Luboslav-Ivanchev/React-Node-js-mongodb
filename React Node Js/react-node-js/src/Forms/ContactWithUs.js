import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useEffect} from "react";
import axios from "axios";
function ContactWithUs() {

    let string=`${window.location.href}`
    let loggedIn=string.substr(22,8)
    if(loggedIn==='loggedIn'){

        let email=localStorage.getItem('email')

            axios.get(`http://localhost:7000/getPeoples`)
                .then(res=>{
                    res.data.user.forEach(object=>{
                        if(email===object.email){
                            localStorage.setItem('id',object._id)
                            localStorage.setItem('name',object.name)

                        }

                    })
                }).catch(e=>{
                console.log(e)

            })

    let name=localStorage.getItem('name');


        return(

            <section class="mb-4">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">


                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0"> <label for="name" class=""/>Your name
                                        <input type="text" id="name" name="name" class="form-control" value={name}/>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0"><label htmlFor="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" class="form-control" value={email}/>

                                    </div>
                                </div>

                                </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0"><label htmlFor="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" class="form-control"/>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="md-form"><label htmlFor="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"/>

                                    </div>

                                </div>
                            </div>


                        </form>
                        <br/>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>


                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </section>

        )
    }else if(loggedIn!=='loggedIn'){
        return(
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate
                    to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">


                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0"><label htmlFor="name" className=""/>Your name
                                        <input type="text" id="name" name="name" className="form-control" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0"><label htmlFor="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control"
                                               />

                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0"><label htmlFor="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control"/>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form"><label htmlFor="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2"
                                                  className="form-control md-textarea"/>

                                    </div>

                                </div>
                            </div>


                        </form>
                        <br/>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>


                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </section>
        )
    }

}

export default ContactWithUs;