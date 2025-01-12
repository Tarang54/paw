import './App.css';
import AboutUs from './molecules/AboutUs';
import Features from './molecules/Features';
import Footer from './molecules/Footer';
import Header from './molecules/Header';
import Hero from './molecules/Hero';
import Subscribe from './molecules/Subscribe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero index={0}/>
      <Hero index={1}/>
      <Features index={0}/>
      <AboutUs />
      <Hero index={2}/>
      <Features index={1}/>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
