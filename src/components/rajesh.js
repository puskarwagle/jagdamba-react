import '../styles/rajesh.css';
import Jasta from './jasta.js';
import React, { useState } from "react";

import keta from '../images/keta.png';
import keti from '../images/keti.png';
import gyalva from '../images/jagdamba-gyalva.png';
import superShine from '../images/jagdamba-super-shine.png';
import KoSaath from '../images/7-ko-sath.png';

function Rajesh() {
  const [superShow,setSuperShow] = useState(false);
  const animate = event => { setSuperShow(current => !current);};
  return (
<div className="Rajesh">
    <div class="grid-item grid-item-1">
      <img className={superShow ? 'SuperSh': 'SuperHi'} src={superShine} alt="supershine left" />
      <div id="viline"></div>
      <img className={superShow ? 'GyalvaSh': 'GyalvaHi'} src={gyalva} alt="gyalva top right" />
    </div>
    <div id="hrgap"></div>
    <div class="grid-item grid-item-2">
      <img className={superShow ? 'RajeshSh': 'RajeshHi'} src={keta} alt="Rajesh Hamal" />
    </div>
    <div class="grid-item grid-item-3">
      <img className={superShow ? 'MadhuSh': 'MadhuHi'} src={keti} alt="Mrs Hamal" />
    </div>
    <div class="grid-item grid-item-4">
      <Jasta/>
    </div>  
    <div class="grid-item grid-item-5">
      <img className="KoSaath" src={KoSaath} alt="Ko Saath" />
    </div>
    <button id="animate" onClick={animate}>Click me!</button>
 </div>
  );
}
export default Rajesh;
