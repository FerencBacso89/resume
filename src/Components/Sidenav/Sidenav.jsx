
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/img/gooseflight_brand.png"
import "../Sidenav/sidenav.css"

/*Material UI & Icons */
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { IconButton } from '@mui/material';
import { styled } from "@mui/material/styles";
import {
  BsPersonSquare,
  BsCardChecklist,
  BsPersonLinesFill,
  BsJournalCode,
} from "react-icons/bs";
import { positions } from '@mui/system';

 
const TooltipIcon = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
      marginTop:"0px"
      
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "0.8rem",
      fontWeight: "bold",
      width: "10vw",
      height:"fit-content",
      position:"relative",
      textAlign:"center",
      marginTop:"30px"
    },
  }));

function Sidenav() {
  return (
    <div className="navbar">
        <Link className="logo" to="/">
              <img id='logo-img' title='Welcome page' src={logo} alt="logo"></img>
        </Link>
  
      <nav>
      <NavLink className={"link-elem"} to="/introducion">
          <TooltipIcon title="Introducion" arrow placement="right-start">
            <IconButton className="navElement">
              <BsPersonLinesFill />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} to="/mycode">
          <TooltipIcon title="My codes" arrow placement="right-start">
            <IconButton className="navElement">
              <BsJournalCode />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} to="/education">
          <TooltipIcon title="Education" arrow placement="right-start">
            <IconButton className="navElement">
              <BsCardChecklist />
            </IconButton>
          </TooltipIcon>
        </NavLink>
      </nav>
    </div>
    
  )
}

export default Sidenav