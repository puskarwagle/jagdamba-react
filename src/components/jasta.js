import '../styles/jasta.css';
import {useRef} from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
/* Jasta Paata */
import jastaGreen from '../images/jasta-green.png';
import jastaBlue from '../images/jasta-dark-blue.png';
import jastaRed from '../images/jasta-red.png';
import jastaGrey from '../images/jasta-grey.png';
import jastaSilver from '../images/jasta-silver.png';
import jastaSkyblue from '../images/jasta-light-blue.png';
import jastaYellow from '../images/jasta-yellow.png';

function Jasta() {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen ({
      root: null,
      rootMargin: "0px",
      threshold : 0.3
   }, targetRef) ;
   
  return (
    <div>
        <img className={isVisible ? 'SkyBlueHi': 'SkyBlueSh'} src={jastaSkyblue} alt="Jasta Light Blue" ref={targetRef}/>
        <img className={isVisible ? 'BlueHi': 'BlueSh'} src={jastaBlue} alt="Jasta Blue" ref={targetRef}/>
        <img className={isVisible ? 'GreenHi': 'GreenSh'} src={jastaGreen} alt="Jasta Green" ref={targetRef}/>
        <img className={isVisible ? 'GreyHi': 'GreySh'} src={jastaGrey} alt="Jasta Grey left" ref={targetRef}/>
        <img className={isVisible ? 'SilverHi': 'SilverSh'} src={jastaSilver} alt="Jasta Silver Right" ref={targetRef}/>
        <img className={isVisible ? 'YellowHi': 'YellowSh'} src={jastaYellow} alt="Jasta Yellow Right" ref={targetRef}/>
        <img className="RedHi" src={jastaRed} alt="Jasta red" />
    </div>
  );
}

export default Jasta;
