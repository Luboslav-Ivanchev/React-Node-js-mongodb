
import React from "react"
import '../Styles/Templates-Styles/home.css';


function Home() {


    let string=`${window.location.href}`
    let loggedIn=string.substr(22,8)
    if(loggedIn==='loggedIn'){
        return(
            <div>
                <div>
                    <img src="https://cdncloudcart.com/30585/files/image/nimbus25-desktop.jpg" height="520" width="1520" alt=''/>
                </div>
                <br/>

                <p className="text">Shop by category</p>
                <div>
                    <section id="food">
                        <div className="food-container container">
                            <div className="food-type fruite">
                                <div className="img-container">

                                    <img src="https://www.sportopen.net/storage/products/(62)N%203.jpeg" alt="error" className="images"/>
                                    <div className="img-content">
                                        <h3>Men's Category</h3>
                                        <a href="/man" className="btn btn-primary"
                                           target="blank">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="food-type vegetable">
                                <div className="img-container">
                                    <img src="https://sportcityshop.com/wp-content/uploads/2021/12/CW6887-451-CW6907-451.jpg" alt="error" className="images"/>
                                    <div className="img-content">
                                        <h3>Women's Category</h3>
                                        <a href="/women" className="btn btn-primary"
                                           target="blank">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="food-type grin">
                                <div className="img-container">
                                    <img src="https://www.tenshop.cz/gallery/products/middle/89737.jpg" alt="error" className="images"/>
                                    <div className="img-content">
                                        <h3>Children's Categories</h3>
                                        <a href="/children" className="btn btn-primary"
                                           target="blank">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <section id="food-menu">
                    <h2 className="food-menu-heading">Categories</h2>
                    <div className="food-menu-container container">
                        <div className="food-menu-item">
                            <br/>
                            <div className="title">
                                <a href="/sushi" className="viewBtn">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FYU6SYHgyR4rEdKiw1_sVnAeixqD3_BU7889aRwax5LBb6TfgzuvMWZvOX7aMVjpVMM&usqp=CAU" height="30" width="20" alt=''/></a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/men" className="viewBtn">Men's</a></h2>
                                <p>
                                    Healthy, tasty, fresh - Narru rolls for happy people. You are also always looking for our new sushi offerings.
                                </p>
                                <a href="/men" className="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/women" class="viewBtn"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZO1YZQLaNG5H-P-7tdWdGwfdBNR27N8zPw&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/dishes" class="viewBtn">Women's</a></h2>
                                <p>
                                    A wide variety of favorite recipes are waiting for you to try!
                                </p>
                                <a href="/women" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/children" class="viewBtn"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTC7HOlPBqKNEV5zIiiWlQkkrxLOm15fCOQ&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/pizza" class="viewBtn">Children's</a></h2>
                                <p>
                                    Pizza Catering provides the perfect solution for your special occasion needs.
                                    Extra condiments available upon request for an additional charge.
                                </p>
                                <a href="/children" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/pasta" class="viewBtn"><img
                                    src="https://i.ebayimg.com/images/g/SxYAAOSwMglgzoNZ/s-l1600.jpg" height="2512" width="3768" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/pasta" class="viewBtn">New Collections</a></h2>
                                <p>
                                    Pasta is a flour-based product of various origins, characteristic of all regional cuisines in Italy.
                                </p>
                                <a href="/pasta" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="title">
                                <a href="/sports" className="viewBtn">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSlmdaWBJEIBckH30VJgGUBZ0WRZZiHaNow&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile"><a href="/burgers" class="viewBtn">Sports</a></h2>
                                <p>
                                    Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef.
                                    Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.
                                </p>
                                <a href="/sports" className="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/shoes" className="viewBtn"> <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcb56MhdnRcX-W1Odz9bzVj22GxqSqDJHQDw&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/liquids" class="viewBtn">Shoes</a></h2>
                                <p>
                                    Lemonades, Non-alcoholic, fresh, beer, wines,
                                    whiskeys,
                                </p>
                                <a href="/shoes" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                    </div>
                </section>



            </div>
        )
    }else if(loggedIn!=='loggedIn'){
        return(
            <div>

                <div>
                    <img src="nimbus25-desktop.jpg" height="520" width="1520" alt=''/>
                </div>

                <p className="text">Shop by category</p>
                <div>
                    <section id="food">
                        <div className="food-container container">
                            <div className="food-type fruite">
                                <div className="img-container">

                                    <img src="https://www.sportopen.net/storage/products/(62)N%203.jpeg" alt="error" className="images" />
                                    <div className="img-content">
                                        <h3>Men's Category</h3>
                                        <a href="/man" className="btn btn-primary"
                                           target="blank">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="food-type vegetable">
                                <div className="img-container">
                                    <img src="https://sportcityshop.com/wp-content/uploads/2021/12/CW6887-451-CW6907-451.jpg" alt="error" className="images"/>
                                    <div className="img-content">
                                        <h3>Women's Category</h3>
                                        <a href="/women" className="btn btn-primary"
                                           target="blank">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="food-type grin">
                                <div className="img-container">
                                    <img src="https://www.tenshop.cz/gallery/products/middle/89737.jpg" alt="error" className="images"/>
                                    <div className="img-content">
                                        <h3>Children's Categories</h3>
                                        <a href="/children" className="btn btn-primary"
                                           target="blank">learn
                                            more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <section id="food-menu">
                    <h2 className="food-menu-heading">Categories</h2>
                    <div className="food-menu-container container">
                        <div className="food-menu-item">
                            <br/>
                            <div className="title">
                                <a href="/sushi" className="viewBtn">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FYU6SYHgyR4rEdKiw1_sVnAeixqD3_BU7889aRwax5LBb6TfgzuvMWZvOX7aMVjpVMM&usqp=CAU" height="30" width="20" alt=''/></a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/men" className="viewBtn">Men's</a></h2>
                                <p>
                                    Healthy, tasty, fresh - Narru rolls for happy people. You are also always looking for our new sushi offerings.
                                </p>
                                <a href="/men" className="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/women" class="viewBtn"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZO1YZQLaNG5H-P-7tdWdGwfdBNR27N8zPw&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/dishes" class="viewBtn">Women's</a></h2>
                                <p>
                                    A wide variety of favorite recipes are waiting for you to try!
                                </p>
                                <a href="/women" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/children" class="viewBtn"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTC7HOlPBqKNEV5zIiiWlQkkrxLOm15fCOQ&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/pizza" class="viewBtn">Children's</a></h2>
                                <p>
                                    Pizza Catering provides the perfect solution for your special occasion needs.
                                    Extra condiments available upon request for an additional charge.
                                </p>
                                <a href="/children" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/pasta" class="viewBtn"><img
                                    src="https://i.ebayimg.com/images/g/SxYAAOSwMglgzoNZ/s-l1600.jpg" height="2512" width="3768" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/pasta" class="viewBtn">New Collections</a></h2>
                                <p>
                                    Pasta is a flour-based product of various origins, characteristic of all regional cuisines in Italy.
                                </p>
                                <a href="/pasta" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="title">
                                <a href="/sports" className="viewBtn">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSlmdaWBJEIBckH30VJgGUBZ0WRZZiHaNow&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile"><a href="/burgers" class="viewBtn">Sports</a></h2>
                                <p>
                                    Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef.
                                    Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.
                                </p>
                                <a href="/sports" className="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                        <div class="food-menu-item">
                            <div class="title">
                                <a href="/shoes" className="viewBtn"> <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcb56MhdnRcX-W1Odz9bzVj22GxqSqDJHQDw&usqp=CAU" height="376" width="600" alt=''/>
                                </a>
                            </div>
                            <div class="food-description">
                                <h2 class="food-titile"><a href="/liquids" class="viewBtn">Shoes</a></h2>
                                <p>
                                    Lemonades, Non-alcoholic, fresh, beer, wines,
                                    whiskeys,
                                </p>
                                <a href="/shoes" class="btn btn-primary">Check out the menu></a>
                            </div>
                        </div>

                    </div>
                </section>



            </div>
        )
    }


}



export default Home;