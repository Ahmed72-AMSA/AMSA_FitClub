import './App.css';
import { Hero } from './components/hero/hero';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Plans from "./components/plans/Plans"
import Testimonials from './components/testimonials/Testimonials';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';

let spin = setTimeout(function() {
  const loadingScreen = document.getElementById('loading-screen');
  const overlay = document.getElementById('overlay');
  const spinner = document.getElementById('spinner');
  
  overlay.style.display = 'none';
  spinner.style.display = 'none';
  loadingScreen.style.display = 'none';
  
}, 5000);





function App() {
  return (
  
  <div className="App">
  <div className="overlay" id="overlay">
  <div id="loading-screen">
  <div class="spinner-wrapper">
  <div class="spinner"></div>
  </div>
  </div>
  </div>




    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>
    <Testimonials/>
    <Join/>
    <Footer/>
    </div>
  );
}

export default App;
