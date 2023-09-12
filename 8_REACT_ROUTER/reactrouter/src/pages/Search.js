import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams;

    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Resultados Disponíveis</h1>
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
    )
}

export default Search; 