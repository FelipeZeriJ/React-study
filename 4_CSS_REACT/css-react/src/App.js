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
    </div>
  );
}

export default App;
