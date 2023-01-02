
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/img/bg-goose.png"
import "../Sidenav/sidenav.css"
// import { BootstrapIcon } from 'react-icons/bs'
// import { BsHouseDoorFill } from "react-icons/bs/BsHouseDoorFill"

function Sidenav() {
  return (
    <div className="navbar">
        <Link className="logo" to="/">
            <img id='logo-img' src={logo} alt="logo"></img>
        </Link>
        {/* <NavLink exact="true" activeclassname="active" to="/">
              <BootstrapIcon icon={BsHouseDoorFill} color="#434242"/>
        </NavLink> */}
    </div>
  )
}

export default Sidenav