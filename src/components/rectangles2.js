import '../styles/rectangles2.css';
import '../styles/rectText.css';


import RectOne from '../images/1.svg';
import RectTwo from '../images/2.svg';
import RectThree from '../images/3.svg';
import RectFour from '../images/4.svg';
import RectFive from '../images/5.svg';
import RectSix from '../images/6.svg';
import RectSeven from '../images/7.svg';

function Rectangles2() {
  return (
    <div className="Rectangles2">
    	<div className="grid-box grid-box1">
      	<div id="circle">१</div>
        <img src={RectOne} alt="1"/>
        <p>अत्याधुुनिक ग्याल्भालुम</p>
      </div>
      
      <div className="grid-box grid-box2">
      	<div id="circle">२</div>
        <img src={RectTwo} alt="2"/>
        <p>टिकाउ तथा खिया प्रतिरोधात्मक</p>
      </div>
      
      <div className="grid-box grid-box3">
      	<div id="circle">३</div>
        <img src={RectThree} alt="3"/>
        <p>हरेक मौसमबाट पूर्ण सुरक्षा</p>
      </div>
      
      <div className="grid-box grid-box4">
      	<div id="circle">४</div>
        <img src={RectFour} alt="4"/>
        <p>उच्च मजबुती</p>
      </div>
      
      <div className="grid-box grid-box5">
      	<div id="circle">५</div>
        <img src={RectFive} alt="5"/>
        <p>उत्कृष्ट रंग कोटिङ्ग प्रविधि</p>
      </div>
      
      <div className="grid-box grid-box6">
      	<div id="circle">६</div>
        <img src={RectSix} alt="6"/>
        <p>उत्कृष्ट गुणस्तर परीक्षण</p>
      </div>
      
      <div className="grid-box grid-box7">
      	<div id="circle">७</div>
        <img src={RectSeven} alt="7"/>
        <p>गार्ड फिल्म कोटिङ्ग</p>
      </div>
      
    </div>
  );
}

export default Rectangles2;
