import { useState } from "react"

const UserDetails = () => {
    const pessoas = [
        { nome: "Felipe Zeri Jahnel", idade: 22, profissao: "Front-End Dev. Junior"},
        { nome: "Marcos Santos", idade: 21, profissao: "Back-End Dev. Junior/Pleno"},
        { nome: "João Ressel", idade: 22, profissao: "Front-End Dev. Junior"},
    ]
    // mudar name por idade
    // tentar ver alguma forma da formula pegar nome ou idade de dentro da lista de objetos
    const [name, setName] = useState("Felipe") 
    return (
        <div>
            <h1>Tem idade para tirar Carteira?</h1>
            {name === "Felipe Zeri" ? (
                <div>
                    <p>Sim podera dirigir</p>
                </div>
            ):(
                <div>
                    <p>Não poderá dirigir</p>
                </div>
            )}
            <button onClick={() => setName("Felipe Zeri")}>Verificar!</button>
        </div>
    )
}

export default UserDetails