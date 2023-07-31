// App.js
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, modelo: "Ford", km: 0, cor: "Vermelho"},
    { id: 2, modelo: "Ferrari", km: 0, cor: "Verde"},
    { id: 3, modelo: "Lamborghini", km: 1000, cor: "Azul"},
  ]

  return (
    <div className="App">
      <h1>Loja de Carros Zerimotivos</h1>
      <h2>Automotivos Novos e Semi-Novos</h2>
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        modelo={car.modelo}
        km={car.km}
        cor={car.cor}
        />
      ))}
    </div>
  );
}

export default App;
