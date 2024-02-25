import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../App';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { cart } = useCart();
    return (
        <div className="navbar navbar-expand-lg nav-bar" style={{ backgroundColor: "#A8D0DB", boxShadow: "0.5px 0.2px 10px", borderBottom: "4px solid #477890" }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand d-flex align-items-center" to='/'>
                    <i className="fa-solid fa-dna fa-2xl"></i>
                    <span className='ms-1 fs-3'>
                        <b>Draven Labs</b>
                    </span>
                </Link>
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className=" btn btn-outline-dark" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '10px' }}>
                            <Link className=" btn btn-outline-dark" to="/products">
                                Store
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '10px' }}>
                            <Link
                                type="button"
                                className="btn btn-outline-dark position-relative"

                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            >
                                <b>
                                    <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                                </b>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    {cart.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Your cart</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="list-group">
                                                <div className="list-group-item d-flex justify-content-between bg-secondary text-white">
                                                    <span>Product</span> <span>Price</span>
                                                </div>
                                                {cart.map((item) => {
                                                    if (item) {
                                                        return (
                                                            <div className="list-group-item list-group-item-action d-flex justify-content-between">
                                                                <span>{item.Name}</span><span>{item.Price}</span>
                                                            </div>
                                                        )
                                                    } else {
                                                        return []
                                                    }
                                                })}
                                            </div>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-between">
                                            <strong>
                                                <span>Total cart value : &#8377; {cart.reduce((acc, item) => {
                                                    acc += item.Price;
                                                    return (parseFloat(acc).toFixed(2));
                                                }, 0)} </span>
                                            </strong>
                                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                            <button type="button" className="btn btn-success">Check out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Paper
                    component="form"
                    sx={{ paddingLeft: "5px", paddingRight: "0px", display: 'flex', alignItems: 'center', justifyContent: "center", width: "70%" }}
                    style={{ borderRadius: "25px" }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper >
                <div>
                </div>
                <div className="container-fluid d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="  btn btn-outline-dark" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="btn btn-outline-dark ms-2"
                                to="/register"
                            >
                                Signup
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
