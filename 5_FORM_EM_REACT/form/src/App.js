import './App.css';
import MyForm from './components/MyForm.js';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{ name: "Felipe", email: "felipe@gmail.com", bio : "Sou um Programador", role: "admin" }}/>
    </div>
  );
}

export default App;
