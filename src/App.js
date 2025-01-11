import './App.css';
import LandCard from './atoms/LandCard';
import AboutUs from './molecules/AboutUs';
import Features from './molecules/Features';
import Header from './molecules/Header';
import Hero from './molecules/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero index={0}/>
      <Hero index={1}/>
      <Features />
      <AboutUs />
      <Hero index={2}/>
      <LandCard />
    </div>
  );
}

export default App;
