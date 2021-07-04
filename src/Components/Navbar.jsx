import React, { useState } from "react";
import styled from "styled-components";
import "./Navbar.css";
import {Link} from "react-scroll";

const Navbar = () => {
  const [icon, setIcon] = useState(true);

  const removebar = () =>{
    setIcon(true);
  }
  return (
    <>
      <Navbarcontainer id="navbar" className="white">
        {/*brand name*/}
        <Brand>
          <p className="brand">Lokesh Garia</p>
        </Brand>
        {/*navbar list */}
        <NavbarList id="navList" className= {icon ? "nav_menu" : "  nav_menu active"}>
          <ListItem   style={{cursor : "pointer"}} >
             <Link  onClick={removebar} to="skills" smooth={true} duration={500} ><span >Skills</span></Link>  
          </ListItem>
          <ListItem  style={{cursor : "pointer"}} >
          <Link onClick={removebar} to="projects" smooth={true} duration={500} ><span >Projects</span></Link>
          </ListItem>
          <ListItem   style={{cursor : "pointer"}}>
          <Link  onClick={removebar}to="contact" smooth={true} duration={500} ><span >Contact</span></Link> 
          </ListItem>
         
          <ListItem onClick={removebar} style={{cursor : "pointer"}}>
            <label className="switch">
            <i class="fas fa-sun" />
              <input type="checkbox" id="checkbox" />
              <span className="slider round" ></span>
              <i class="fas fa-moon" /> 
            </label>
          </ListItem>
        </NavbarList>       
        {
          <Iconbar onClick={() => setIcon(!icon)}>
            <i class={icon ? "fas fa-bars" : "fas fa-times "} />
          </Iconbar>
        }
      </Navbarcontainer>
    </>
  );
};

export default Navbar;

/** STYLED COMPONENTS */
const Navbarcontainer = styled.section`
  display: flex;
  
  position: fixed;
  top: 0;
  z-index: 23;
  width: 100%;
  justify-content: space-between;
`;

const Brand = styled.div`
  margin: 15px 22px;
  p {
    color: #ec615b;
    font-size: 1.9rem;
    font-weight: 700;
    margin: 0;
  }
  @media (max-width: 768px) {
    p {
      color: #ec615b;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0;
    }
  }
`;

const NavbarList = styled.ul`
  
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  font-weight: 600;
  font-size: 1em;

  color: #827979;
  a {
    text-decoration: none;
    color: #827979;
  }
  @media (max-width: 768px) {
     
    position: relative;
    top: 32px;
    padding: 11px 0;
    margin: 12px 0;
    width : 80%;
    left : 0px;
    justify-content : center;
    border-radius : 3px;
    background-color : #b0231d;
    font-size: 24px;
    a {
   
    color: #fff;
  }
    &:hover {
        background-color : #581e1b;
    }
  }
  
`;

const Iconbar = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 35px;
    margin: 8px 23px;
    color: #000;
    z-index: 44;
  }
`;
