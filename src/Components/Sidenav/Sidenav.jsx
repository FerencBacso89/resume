
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/img/bg-goose.png"
import "../Sidenav/sidenav.css"
// import { BootstrapIcon } from 'react-icons/bs'
// import { BsHouseDoorFill } from "react-icons/bs/BsHouseDoorFill"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { IconButton } from '@mui/material';
import { styled } from "@mui/material/styles";
import {
  BsPersonSquare,
  BsCardChecklist,
  BsPersonLinesFill,
  BsJournalCode,
} from "react-icons/bs";
 
const TooltipIcon = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "0.8rem",
      fontWeight: "bold",
    },
  }));

function Sidenav() {
  return (
    <div className="navbar">
        <Link className="logo" to="/">
            <img id='logo-img' src={logo} alt="logo"></img>
        </Link>
        {/* <NavLink exact="true" activeclassname="active" to="/">
              <BootstrapIcon icon={BsHouseDoorFill} color="#434242"/>
        </NavLink> */}
        <NavLink className={"link-elem"}>
          <TooltipIcon title="Introducion" arrow placement="right-start">
            <IconButton className="navElement">
              <BsPersonLinesFill />
            </IconButton>
          </TooltipIcon>
        </NavLink>
    </div>
  )
}

export default Sidenav