import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./Home.css"

const Home = () => {
    // 3 - carregamento de dados
    const url = 'http://localhost:3000/products'

    const {data: items, loading, error} = useFetch(url)

    return <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <div className="products">
            {items && items.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>
                    <button>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </button>
                </div>
            ))}
        </div>
    </div>
}

export default Home;