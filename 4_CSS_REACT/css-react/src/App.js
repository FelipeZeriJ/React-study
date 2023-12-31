import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react";
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Felipe")

  const redTitle = true
  
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React em CSS</h1>

      {/* CSS de Componente */}
      <MyComponent />
      Este parágrafo é do app.js

      {/* Inline CSS */}
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS Inline dinâmico */}
      <h2 style={ n < 10 ? { color: "purple" } : { color: "pink" }}>CSS dinâmico</h2>
      <h2 style={ n > 10 ? { color: "purple" } : { color: "pink" }}>CSS dinâmico</h2>
      <h2 style={ name === "Felipe" ? { color: "green", backgroundColor: "black" } : null}>Teste nome</h2>

      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
