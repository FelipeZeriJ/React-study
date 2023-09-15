import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
    const { counter } = useContext(CounterContext)

    return (
        <div>
            <div>Home</div>
            <p>Valor do contador: {counter}</p>
            {/* 3 - Alterando valor contexto */}
            <ChangeCounter />
        </div>
    )
}

export default Home;