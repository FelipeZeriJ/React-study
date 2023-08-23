import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - rota dinamica
    const { id } = useParams();

    // 5 - Carregamento Dado Individual
    const url = "http://localhost:3000/products/" + id

    const {data: product, loading, error} = useFetch(url)

    return (
        <>
          <p>ID do produto: {id}</p>
        </>
    )
}

export default Product;