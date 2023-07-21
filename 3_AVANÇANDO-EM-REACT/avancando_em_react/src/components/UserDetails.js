import { useState } from "react"

const UserDetails = ({ nome, idade, profissao }) => {
    const [idad, setName] = useState(idade) 
    return (
        <div>
            <p>Tem idade para tirar Carteira?  <br /> Nome: <strong>{nome}</strong>  <br /> Profissão: <strong>{profissao}</strong></p>
            {idad >= 18 ? (
                <div>
                    <p>Sim podera dirigir</p>
                </div>
            ):(
                <div>
                    <p>Não poderá dirigir</p>
                </div>
            )}
            {/* <button>Verificar!</button> */}
            <button onClick={() => setName(idade)}>Verificar!</button>
        </div>
    )
}

export default UserDetails
