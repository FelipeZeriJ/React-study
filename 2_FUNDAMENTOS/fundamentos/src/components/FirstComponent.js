import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;