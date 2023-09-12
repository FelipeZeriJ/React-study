import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// PAGES
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
