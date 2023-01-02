
import React from 'react'
import { Link } from "react-router-dom"
import logo from "../../../assets/img/bg-goose.png"
import "../Sidenav/sidenav.css"
import { BsHouseDoorFill } from "react-icons/bs"

function Sidenav() {
  return (
    <div className="navbar">
        <Link className="logo" to="/">
            <img id='logo-img' src={logo} alt="logo"></img>
        </Link>
    </div>
  )
}

export default Sidenav