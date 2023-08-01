import "./MyForm.css"

import { useState } from 'react'

const MyForm = ({user}) => {
    // 6 - Controlled Inputs
    // 3 - Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault() // Formulario não recarrega a pagina mais
        console.log('Enviando o Formulário')
        console.log(name, email)
    }

    return (
        <div>
            {/* 5 - Envio de Form */}
            {/* 1 - Criação de Forms */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite o seu nome" 
                    onChange={handleName}
                    value={name}
                    />
                </div>
                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* 4 - Simplificação de Manipulação de state */}
                    <input type="email" name="email" placeholder="Digite o seu e-mail" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm