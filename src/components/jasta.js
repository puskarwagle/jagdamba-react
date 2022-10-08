import '../styles/jasta.css';
import React, { useState } from "react";
/* Jasta Paata */
import jastaGreen from '../images/jasta-green.png';
import jastaBlue from '../images/jasta-dark-blue.png';
import jastaRed from '../images/jasta-red.png';
import jastaGrey from '../images/jasta-grey.png';
import jastaSilver from '../images/jasta-silver.png';
import jastaSkyblue from '../images/jasta-light-blue.png';
import jastaYellow from '../images/jasta-yellow.png';

function Jasta() {
  const [jastaShow,setJastaShow] = useState(false);
  const animate = event => {setJastaShow(current => !current);};
  return (
    <div>
        <img className={jastaShow ? 'SkyBlueHi': 'SkyBlueSh'} src={jastaSkyblue} alt="Jasta Light Blue" />
        <img className={jastaShow ? 'BlueHi': 'BlueSh'} src={jastaBlue} alt="Jasta Blue" />
        <img className={jastaShow ? 'GreenHi': 'GreenSh'} src={jastaGreen} alt="Jasta Green" />
        <img className={jastaShow ? 'GreyHi': 'GreySh'} src={jastaGrey} alt="Jasta Grey left" />
        <img className={jastaShow ? 'SilverHi': 'SilverSh'} src={jastaSilver} alt="Jasta Silver Right" />
        <img className={jastaShow ? 'YellowHi': 'YellowSh'} src={jastaYellow} alt="Jasta Yellow Right" />
        <img className="RedHi" src={jastaRed} alt="Jasta red" />
        
        <button id="jasta" onClick={animate}>Jastao</button>
    </div>
  );
}

export default Jasta;