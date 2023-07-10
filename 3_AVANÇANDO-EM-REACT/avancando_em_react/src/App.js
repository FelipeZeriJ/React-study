// import logo from './logo.svg';
import './App.css';
import City from "./assets/citynight.jpg";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Avançando em React!</h1>
      {/* Imagem em public */}
      <div>
        <img src="/montanha.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade Nortuna" />
      </div>
    </div>
  );
}

export default App;
