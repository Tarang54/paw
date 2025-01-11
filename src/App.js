import './App.css';
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
    </div>
  );
}

export default App;
