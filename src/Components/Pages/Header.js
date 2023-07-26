import React from 'react'
import {Link} from 'react-router-dom';
import Page from './Page';
import { useSelector } from 'react-redux';

export default function Header() {
    const items = useSelector((state) => state.cart.items)
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
            <img className="image" src="./Images/Logo.png" alt="logo" style={{width: "80px"}}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <Link to="/" className='text-decoration-none'><li>Home</li></Link>
                    </ul>
                    <form className="d-flex">
                    <Link to="/cart"><button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{items.length}</span>
                        </button></Link>
                    </form>
            </div>
        </div>   
    </nav>
    <Page />
    </div>
  )
}
