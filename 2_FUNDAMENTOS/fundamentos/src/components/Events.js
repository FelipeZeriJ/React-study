const Events = () => {
    const handleMyEvent = () => {
        console.log("Ativou o evento!")
        // window.alert("Ativou o Alerta do evento!")
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    )
}

export default Events