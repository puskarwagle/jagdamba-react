import '../styles/rajesh.css';
import Jasta from './jasta.js';
import keta from '../images/keta.png';
import keti from '../images/keti.png';
import gyalva from '../images/jagdamba-gyalva.png';
import superShine from '../images/jagdamba-super-shine.png';
import KoSaath from '../images/7-ko-sath.png';

import {useRef} from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

function Rajesh() {
	const targetRef = useRef(null);
  const isVisible = useElementOnScreen ({
      root: null,
      rootMargin: "0px",
      threshold : 0.3
   }, targetRef) ;
   
  return (
<div className="Rajesh">
    <div className="grid-item grid-item-1">
   	  <img className={isVisible ? 'SuperHi': 'SuperSh'} src={superShine} alt="supershine left"/>
      <div id="viline"></div>
      <img className={isVisible ? 'GyalvaHi': 'GyalvaSh'} src={gyalva} alt="gyalva top right"/>
    </div>
    <div id="hrgap"></div>
    <div className="grid-item grid-item-2">
      <img className={isVisible ? 'RajeshHi': 'RajeshSh'} src={keta} alt="Rajesh Hamal"/>
    </div>
    <div className="grid-item grid-item-3">
      <img className={isVisible ? 'MadhuHi': 'MadhuSh'} src={keti} alt="Mrs Hamal"/>
    </div>
    <div className="grid-item grid-item-4">
      <Jasta/>
    </div>  
    <div className="grid-item grid-item-5">
      <img className="KoSaath" src={KoSaath} alt="Ko Saath" />
    </div>
 </div>
  );
}
export default Rajesh;
