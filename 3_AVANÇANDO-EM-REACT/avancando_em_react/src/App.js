// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import City from "./assets/citynight.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {
  const varname = "Felipe var"
  const [userName] = useState("Felipe State")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    { id: 2, brand: "KIA", color: "Red", newCar: false, km: 110},
    { id: 3, brand: "Renault", color: "Yellow", newCar: false, km: 9110},
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

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
      <ManageData />

      <ListRender />

      <ConditionalRender />

      {/* Props */}
      <ShowUserName name={userName}/>
      <ShowUserName name={varname}/>
      <ShowUserName name="Felipe normal"/>

      {/* Destructuring */}
      <CarDetails brand="VW" km={1000} color="Branco" newCar={false}/>

      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Azul" km={100} newCar={false}/>

      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} />
      ))}

      {/* Fragment */}
      <Fragments propFragment={"teste"}/>

      {/* Container */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>E este é o conteúdo</p>
      </Container>

      {/* Executar Função */}
      <ExecuteFunction myFunction={showMessage} />

    </div>
  );
}

export default App;
