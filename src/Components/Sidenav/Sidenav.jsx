
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
      
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "1rem",
      fontWeight: "bold",
      width: "fit-content",
      height:"fit-content",
      position:"relative",
      textAlign:"center",
    },
  }));

function Sidenav() {
  return (
    <div className="navbar">
        <Link className="logo" to="/">
              <img id='logo-img' title='Welcome page' src={logo} alt="logo"></img>
        </Link>
  
      <nav>
      <NavLink className={"link-elem"} to="/introduce">
          <TooltipIcon title="Introducion" arrow placement="right">
            <IconButton className="navElement">
              <BsPersonLinesFill />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} to="/mycode">
          <TooltipIcon title="My codes" arrow placement="right">
            <IconButton className="navElement">
              <BsJournalCode />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} to="/education">
          <TooltipIcon title="Education" arrow placement="right">
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