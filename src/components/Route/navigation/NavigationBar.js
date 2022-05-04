import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import './navigation.css'


function NavigationBar() {
    const cartItems=useSelector((state)=> state.cartItemReducer)
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark  mb-3">
                <div className="container-fluid d-block">
                    <div className="row w-100">
                        <div className="col-xl-4 col-md-4 col-4 d-flex justify-content-start">
                            <Link className="navbar-brand" to="/">KHREEDO-APP</Link>
                        </div>
                        <div className="col-xl-2 col-md-2 col-2"></div>

                        <div className="col-xl-6 col-md-6 col-6">
                            <button className="navbar-toggler"  type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link text-light  " aria-current="page" to="/">HOME</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link   text-light" aria-current="page" to="/mens">MEN'S</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link  text-light" aria-current="page" to="/womens">WOMEN'S</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link  text-light" aria-current="page" to="/jewelary">JEWELLERY</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link   text-light" aria-current="page" to="/electronics">ELECTRONICS</Link>
                                    </li>
                                    
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link   text-light" to="/shop">SHOP</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link   text-light" to="/cart"><i class="fa-solid fa-bag-shopping"></i>
                                        <span className="badge bg-light text-dark mx-1">{cartItems.length}</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;