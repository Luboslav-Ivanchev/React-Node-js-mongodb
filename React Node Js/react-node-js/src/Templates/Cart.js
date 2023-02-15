import React, {useState} from "react"
import '../Styles/Templates-Styles/cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function CartService() {
    const [isLogged,setLoggedIn]=useState(false)

    let string=`${window.location.href}`
    let loggedIn=string.substr(22,8)
    let email=localStorage.getItem('email')


    fetch(`http://localhost:7000/getPeoples`).then(res=>res.json())
        .then(data=>{
            data.user.forEach(object=>{
                if(object.email===email){
                    localStorage.setItem('address',object.personalInformation.addressLine);
                    localStorage.setItem('username',object.personalInformation.userName)
                    localStorage.setItem('name',object.name);
                    localStorage.setItem('country',object.personalInformation.country);
                }
            })
        })

    let address=localStorage.getItem('address');
    let username=localStorage.getItem('username');
    let country=localStorage.getItem('country');
    let name=localStorage.getItem('name');

    if(loggedIn==='loggedIn'){
        return(
            <body>

            <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" className="h5">Shopping Bag</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img src="" className="img-fluid"
                                                />
                                                <div className="flex-column ms-4">
                                                    <p className="mb-2"></p>
                                                    <p className="mb-0"></p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle">
                                            <div className="d-flex flex-row">
                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i className="fas fa-minus"></i>
                                                </button>

                                                <input id="form1" min="0" name="quantity" value="2" type="number"
                                                       className="form-control form-control-sm"/>

                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <p className="mb-0">$9.99</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-bottom-0">
                                            <div className="d-flex align-items-center">
                                                <img src="" className="img-fluid"
                                                />
                                                <div className="flex-column ms-4">
                                                    <p className="mb-2"></p>
                                                    <p className="mb-0"></p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle border-bottom-0">
                                            <div className="d-flex flex-row">
                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i className="fas fa-minus"></i>
                                                </button>

                                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                                       className="form-control form-control-sm" />

                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle border-bottom-0">
                                            <p className="mb-0">$13.50</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="card shadow-2-strong mb-5 mb-lg-0">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xl-6">
                                            <div className="row">
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeName">Name on
                                                            Profile</label>
                                                        <input type="text" id="typeName"
                                                               className="form-control form-control-lg" siez="17"
                                                            value={name}   placeholder="John Smith"/>

                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                        <input type="text" id="typeExp"
                                                               className="form-control form-control-lg" placeholder="MM/YY"
                                                               size="7"  minLength="7" maxLength="7"/>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Card Number</label>
                                                        <input type="text" id="typeText"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="1111 2222 3333 4444" minLength="19"
                                                               maxLength="19"/>
                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Cvv</label>
                                                        <input type="password" id="typeText"
                                                               className="form-control form-control-lg"
                                                               placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3"
                                                               maxLength="3"/>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-6">
                                            <div className="row">
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeName">Email</label>
                                                        <input type="text" id="typeName"
                                                               className="form-control form-control-lg" siez="17"
                                                            value={email}   placeholder="email"/>

                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeName">Username</label>
                                                        <input type="text" id="typeName"
                                                               className="form-control form-control-lg" siez="17"
                                                             value={username}  placeholder="username"/>

                                                    </div>

                                                </div>
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Address</label>
                                                        <input type="text" id="typeText"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="address" minLength="19"
                                                             value={address}  maxLength="19"/>
                                                    </div>
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Country</label>
                                                        <input type="text" id="typeText"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="country" minLength="19"
                                                            value={country}   maxLength="19"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-5">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Subtotal</p>
                                                <p className="mb-2">$23.49</p>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <p className="mb-0">Shipping</p>
                                                <p className="mb-0">$2.99</p>
                                            </div>

                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-4">
                                                <p className="mb-2">Total</p>
                                                <p className="mb-2">$26.48</p>
                                            </div>

                                            <button type="button" className="btn btn-primary btn-block btn-lg">
                                                <div className="d-flex justify-content-between">
                                                    <span>Checkout</span>
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                    <span>$26.48</span>
                                                </div>
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            </body>
        )
    }else{
        return(
            <body>

            <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" className="h5">Shopping Bag</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img src="" className="img-fluid"
                                                />
                                                <div className="flex-column ms-4">
                                                    <p className="mb-2"></p>
                                                    <p className="mb-0"></p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle">
                                            <div className="d-flex flex-row">
                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i className="fas fa-minus"></i>
                                                </button>

                                                <input id="form1" min="0" name="quantity" value="2" type="number"
                                                       className="form-control form-control-sm"/>

                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <p className="mb-0">$9.99</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-bottom-0">
                                            <div className="d-flex align-items-center">
                                                <img src="" className="img-fluid"
                                                />
                                                <div className="flex-column ms-4">
                                                    <p className="mb-2"></p>
                                                    <p className="mb-0"></p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle border-bottom-0">
                                            <div className="d-flex flex-row">
                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i className="fas fa-minus"></i>
                                                </button>

                                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                                       className="form-control form-control-sm" />

                                                <button className="btn btn-link px-2"
                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle border-bottom-0">
                                            <p className="mb-0">$13.50</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="card shadow-2-strong mb-5 mb-lg-0">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xl-6">
                                            <div className="row">
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeName">Name on
                                                            Profile</label>
                                                        <input type="text" id="typeName"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="John Smith"/>

                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                        <input type="text" id="typeExp"
                                                               className="form-control form-control-lg" placeholder="MM/YY"
                                                               size="7"  minLength="7" maxLength="7"/>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Card Number</label>
                                                        <input type="text" id="typeText"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="1111 2222 3333 4444" minLength="19"
                                                               maxLength="19"/>
                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Cvv</label>
                                                        <input type="password" id="typeText"
                                                               className="form-control form-control-lg"
                                                               placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3"
                                                               maxLength="3"/>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-6">
                                            <div className="row">
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeName">Email</label>
                                                        <input type="text" id="typeName"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="email"/>

                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeName">Username</label>
                                                        <input type="text" id="typeName"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="email"/>

                                                    </div>

                                                </div>
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Address</label>
                                                        <input type="text" id="typeText"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="address" minLength="19"
                                                               maxLength="19"/>
                                                    </div>
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <label className="form-label" htmlFor="typeText">Country</label>
                                                        <input type="text" id="typeText"
                                                               className="form-control form-control-lg" siez="17"
                                                               placeholder="address" minLength="19"
                                                               maxLength="19"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-5">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Subtotal</p>
                                                <p className="mb-2">$23.49</p>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <p className="mb-0">Shipping</p>
                                                <p className="mb-0">$2.99</p>
                                            </div>

                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-4">
                                                <p className="mb-2">Total</p>
                                                <p className="mb-2">$26.48</p>
                                            </div>

                                            <button type="button" className="btn btn-primary btn-block btn-lg">
                                                <div className="d-flex justify-content-between">
                                                    <span>Checkout</span>
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                    <span>$26.48</span>
                                                </div>
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            </body>
        )
    }


}


export default CartService;
