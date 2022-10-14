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
   <li className="home"><FaHome /></li> {/* Home icon */}
   <li onClick={aboutShow}> {/* About. main li */}
     <a href="#!">ABOUT US &#9662;</a>
     <ul className={aboutHide ? 'AboutSh': 'AboutHi'}>
       <li><a href="https://jagdambasteels.com/about/">Jagdamba Steel</a></li>
       <li><a href="https://jagdambasteels.com/about-shanker-group/">About Shankar</a></li>
       <li><a href="https://jagdambasteels.com/sustainability/">Sustainability</a></li>
       <li><a href="https://jagdambasteels.com/team/">Team</a></li>
       <li><a href="https://jagdambasteels.com/certification/">Certification</a></li>
     </ul>
   </li>

      <li onClick={productShow}> {/* Product. main li */}
        <a href="#!">PRODUCTS &#9662;</a>
        <ul className={productHide ? 'ProductSh': 'ProductHi'}> {/* Products main ui */}
          <li><a href="https://jagdambasteels.com/products/fe-500-rebar/">Jagdamba E</a></li>
          <li><a href="https://jagdambasteels.com/products/fe-500-d-rebar/">Fe 500 d rebar</a></li>
          <li><a href="https://jagdambasteels.com/products/ms-angle/">Ms Angle</a></li>
          <li><a href="https://jagdambasteels.com/products/beams/">Beams</a></li>
          <li><a href="https://jagdambasteels.com/products/galvanized-wire/">Galvanized Wire</a></li>
        </ul>
      </li>

      <li><a href="#!">CONTACTS</a></li>
    </ul>
    </nav>
  </div>
);
}

export default Header;
