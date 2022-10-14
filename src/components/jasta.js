import '../styles/jasta.css';
import {useRef} from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
/* Jasta Paata */
import jastaGreen from '../images/jasta-green.webp';
import jastaBlue from '../images/jasta-dark-blue.webp';
import jastaRed from '../images/jasta-red.webp';
import jastaGrey from '../images/jasta-grey.webp';
import jastaSilver from '../images/jasta-silver.webp';
import jastaSkyblue from '../images/jasta-light-blue.webp';
import jastaYellow from '../images/jasta-yellow.webp';

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
