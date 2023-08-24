import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";

function Navbar({ open, setOpen }) {
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <nav>
      <div className="nav_left">
        <h3>
          <span className="hi">Mohamed</span>riyas
        </h3>
      </div>
      <div className="nav_right" id={open ? null : "hide"}>
        <div className="menu_icon" onClick={handleClick}>
          <span> <CloseIcon className="nav-menu" /></span>
        </div>
        <h6>
          <Link
            to="home"
            activeclassName="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={250}
            onClick={closeMenu}
          >
            <HomeIcon className="nav-icon" /> Home
          </Link>
        </h6>
        <h6>
          <Link
            to="about"
            activeclassName="active"
            spy={true}
            smooth={true}
            offset={-90}
            duration={250}
            onClick={closeMenu}
          >
            <InfoIcon className="nav-icon" /> About
          </Link>
        </h6>
        <h6>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-90}
            duration={250}
            onClick={closeMenu}
          >
            <EmojiObjectsIcon className="nav-icon" /> Skills
          </Link>
        </h6>
        <h6>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-90}
            duration={250}
            onClick={closeMenu}
          >
            <FormatListNumberedIcon className="nav-icon" /> Project
          </Link>
        </h6>
        <h6>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={250}
            onClick={closeMenu}
          >
            <MailIcon className="nav-icon" /> Contact Us
          </Link>
        </h6>
        <h6>
          <a
            className="resume"
            to="contact"
            href="https://drive.google.com/file/d/1W3ZaNFmi30hrpm6oYYkbrOdOD-BlsMhe/view"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <DescriptionIcon className="nav-icon" /> Resume
          </a>
        </h6>
      </div>
      <div className="menu_icon2 " onClick={handleClick}>
        <span> <MenuIcon className="nav-menu" /></span>
      </div>
    </nav>
  );
}

export default Navbar;
