import './App.css';
import Hero from "./components/heroImage/heroimage.jsx"
import Navbar from './components/navbar/navbar';
import Card from "./components/card/card.jsx"
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Hero/>
      <Card/>
    </div>
  );
}

export default App;
