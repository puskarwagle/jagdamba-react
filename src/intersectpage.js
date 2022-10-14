import './styles/app.css';
import React, {useRef} from "react";
import useElementOnScreen from "./hooks/useElementOnScreen";

function Intersectpage() {
   const targetRef = useRef(null);
   const isVisible = useElementOnScreen ({
      root: null,
      rootMargin: "0px",
      threshold : 0.3
   }, targetRef) ;


return (
  <>
    <h1 className="header"><p>{!isVisible ? 'not in viewport' : 'in viewport'}</p></h1>
    <div className="gap"></div>
    <img alt="simp" src="https://source.unsplash.com/gySMaocSdqs/600x300" ref={targetRef}/>

    <img className={!isVisible ? 'imgfalse': 'imgtrue'} src="https://source.unsplash.com/gySMaocSdqs/600x300" alt="imgclass" ref={targetRef}/>
  </>
          );
}

export default Intersectpage;
