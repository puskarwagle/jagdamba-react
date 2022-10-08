import './styles/app.css';
import Header from './components/header.js';
import Rajesh from './components/rajesh.js';
import FrontText from './components/fronttext.js';
import Rectangles from './components/rectangles.js';
import FrontText2 from './components/fronttext2.js';
/* import Youtube from './components/youtube.js'; */
import Form from './components/form.js';
import Footer from './components/footer.js';
import End from './components/end.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Rajesh/>
      <FrontText/>
      <Rectangles/>
      <FrontText2/>
      
      <Form/>
      <Footer/>
      <End/>
    </div>
  );
}

export default App;
