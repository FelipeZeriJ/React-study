import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import Navbar from "./components/Navbar"

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from "./pages/Product"
import Info from "./pages/info"
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Links com react router */}
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* 4 - Rota Dinamica */}
          <Route path ="/products/:id" element={<Product />}/>
          {/* 6 - Nested Route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 7 - No match Route */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
