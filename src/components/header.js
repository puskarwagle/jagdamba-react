import React, { useState } from "react";
import '../styles/header.css';
import logo from '../images/jagdamba-logo.svg';
import { FaHome } from 'react-icons/fa';

function Header() {
  const [aboutHide,setAboutHide] = useState(false);
  const aboutShow = event => { setAboutHide(current => !current);};
  
  const [productHide,setProductHide] = useState(false);
  const productShow = event => { setProductHide(current => !current);};
  return (
<div className="Header">
<img src={logo} className="App-logo" alt="logo" />
<nav>
  <ul> {/* Main ul */}
   <li><FaHome /></li> {/* Home icon */}
   
   <li onClick={aboutShow}> {/* About. main li */}
    <a href="#!">ABOUT US &#9662;</a>
    <ul className={aboutHide ? 'AboutSh': 'AboutHi'}>
      <li>inside About 1</li>
      <li>inside About 2</li>
      <li>inside About 3</li>
    </ul>
   </li>
   
      <li onClick={productShow}> {/* Product. main li */}
        <a href="#!">PRODUCTS &#9662;</a>
        <ul className={productHide ? 'ProductSh': 'ProductHi'}> {/* Products main ui */}
          <li>inside Products 1</li>
          <li>inside Products 2</li>
          <li>inside Products 3</li>
        </ul>
      </li>
      
      <li><a href="#!">CONTACTS</a></li>
    </ul>
    </nav>
  </div>
);
}

export default Header;