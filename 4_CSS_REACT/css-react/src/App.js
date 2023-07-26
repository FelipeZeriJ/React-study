import './App.css';
import MyComponent from './components/MyComponent';

function App() {
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
    </div>
  );
}

export default App;
