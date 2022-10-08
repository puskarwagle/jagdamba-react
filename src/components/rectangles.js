import '../styles/rectangles.css';
import '../styles/rectText.css';


import RectOne from '../images/1.svg';
import RectTwo from '../images/2.svg';
import RectThree from '../images/3.svg';
import RectFour from '../images/4.svg';
import RectFive from '../images/5.svg';
import RectSix from '../images/6.svg';
import RectSeven from '../images/7.svg';

function Rectangles() {
  return (
    <div className="Rectangles">
      <div className="top">
        <div className="grid-box One"  tabindex="0">
        	<div className="pTex pOne">यो नेपालकै पहिलो स्वचालित अत्याधुनिक ग्याल्भालुम लाइन प्रक्रिया (४ कोट कोटिङ्ग विधि, रिभर्स रोलिङ्ग कोटिङ्ग विधि, स्किन पास मिल तथा स्ट्रेच लेभलर) बाट उत्पादित पहिलो आल्मुनियम - जिंक कोटिङ्ग भएको उत्पादन हो । यसले घरलाई उच्चतम सुरक्षा, दीर्घायु जीवन र आकर्षक स्वरुप प्रदान गर्दछ ।</div>
          <div id="circle">१</div>
          <img src={RectOne} alt="1"/>
          <p>अत्याधुुनिक ग्याल्भालुम</p>
        </div>
        
        <div className="grid-box Two" tabindex="0">
        	<div className="pTex pTwo">एन्टी–कोरोजन प्रविधिद्वारा उत्पादित जगदम्बा सुपर शाइन तथा जगदम्बा ग्याल्भा+ जस्तापाता वर्षौं वर्ष टिक्छन् । साथै, आल्मुनियम, जिंक र सिलिकन अलोयको प्रयोगले कोटिङ्गको खिया प्रतिरोधात्मक क्षमतामा समेत अत्याधिक वृद्धि गर्दछ ।</div>
          <div id="circle">२</div>
          <img src={RectTwo} alt="2"/>
          <p>टिकाउ तथा खिया प्रतिरोधात्मक</p>
        </div>
        
        <div className="grid-box Three" tabindex="0">
        	<div className="pTex pThree">मौसम प्रतिरोधक क्षमता भएको जगदम्बा सुपर शाइन र जगदम्बा ग्याल्भा+ ले भारी वर्षा, हिमपात, उच्च तापक्रम जस्ता हरेक प्रकारका मौसमबाट बचाउनका साथै उपयुक्त इन्सुलेशन प्रदान गर्दछ।</div>
          <div id="circle">३</div>
          <img src={RectThree} alt="3"/>
          <p>हरेक मौसमबाट पूर्ण सुरक्षा</p>
        </div>
      </div>
      
      <div className="bottom">
        <div className="grid-box Four" tabindex="0">
        	<div className="pTex pFour">मौसम प्रतिरोधक क्षमता भएको जगदम्बा सुपर शाइन र जगदम्बा ग्याल्भा+ ले भारी वर्षा, हिमपात, उच्च तापक्रम जस्ता हरेक प्रकारका मौसमबाट बचाउनका साथै उपयुक्त इन्सुलेशन प्रदान गर्दछ।</div>
          <div id="circle">४</div>
          <img src={RectFour} alt="4"/>
          <p>उच्च मजबुती</p>
        </div>
        <div className="grid-box Five" tabindex="0">
        	<div className="pTex pFive">मौसम प्रतिरोधक क्षमता भएको जगदम्बा सुपर शाइन र जगदम्बा ग्याल्भा+ ले भारी वर्षा, हिमपात, उच्च तापक्रम जस्ता हरेक प्रकारका मौसमबाट बचाउनका साथै उपयुक्त इन्सुलेशन प्रदान गर्दछ।</div>
          <div id="circle">५</div>
          <img src={RectFive} alt="5"/>
          <p>उत्कृष्ट रंग कोटिङ्ग प्रविधि</p>
        </div>
        <div className="grid-box Six" tabindex="0">
        	<div className="pTex pSix">मौसम प्रतिरोधक क्षमता भएको जगदम्बा सुपर शाइन र जगदम्बा ग्याल्भा+ ले भारी वर्षा, हिमपात, उच्च तापक्रम जस्ता हरेक प्रकारका मौसमबाट बचाउनका साथै उपयुक्त इन्सुलेशन प्रदान गर्दछ।</div>
          <div id="circle">६</div>
          <img src={RectSix} alt="6"/>
          <p>उत्कृष्ट गुणस्तर परीक्षण</p>
        </div>
        <div className="grid-box Seven" tabindex="0">
        	<div className="pTex pSeven">मौसम प्रतिरोधक क्षमता भएको जगदम्बा सुपर शाइन र जगदम्बा ग्याल्भा+ ले भारी वर्षा, हिमपात, उच्च तापक्रम जस्ता हरेक प्रकारका मौसमबाट बचाउनका साथै उपयुक्त इन्सुलेशन प्रदान गर्दछ।</div>
          <div id="circle">७</div>
          <img src={RectSeven} alt="7"/>
          <p>गार्ड फिल्म कोटिङ्ग</p>
        </div>
      </div>
      
    </div>
  );
}

export default Rectangles;
