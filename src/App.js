import './App.css';
import Plan from './components/Plans/Plan';

import Programs from './components/Programs/Programs';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Reason from './components/reasons/Reason';
import Testimoniel from './components/testimoniels/Testimoniel';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reason/>
          <Plan/>
          {/* <Testimoniel/> */}
          <Footer/>
          
    </div>
  );
}

export default App;
