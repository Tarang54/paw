import './App.css';
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
    </div>
  );
}

export default App;
