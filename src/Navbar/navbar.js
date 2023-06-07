import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark" style={{height:"5rem"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" style={{fontSize:"2.5rem"}} to="/">#MyBooks</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" style={{fontSize:"2rem"}} aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" style={{fontSize:"2rem"}} href="#">Features</NavLink>
        <NavLink className="nav-link" style={{fontSize:"2rem"}} href="#">Pricing</NavLink>
        <NavLink className="nav-link" style={{fontSize:"2rem",marginLeft:"105rem"}} to="mycart">Cart<BsCart4/></NavLink>
      </div>
    </div>
  </div>
</nav>
       </> 
    )
}