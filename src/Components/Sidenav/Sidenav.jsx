
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/img/bg-goose.png"
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
          <TooltipIcon title="DevBacso" arrow placement="right-start">
              <img id='logo-img' src={logo} alt="logo"></img>
          </TooltipIcon>
        </Link>
    
      <nav>
      <NavLink className={"link-elem"}>
          <TooltipIcon title="Introducion" arrow placement="right-start">
            <IconButton className="navElement">
              <BsPersonLinesFill />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"}>
          <TooltipIcon title="My codes" arrow placement="right-start">
            <IconButton className="navElement">
              <BsJournalCode />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"}>
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