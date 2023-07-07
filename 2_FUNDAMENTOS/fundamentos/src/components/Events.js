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
            <div>
                <button onClick ={() => console.log("Clicou!")}>
                Clique aqui também!
                </button>
                <button 
                onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existi =^)")
                    }
                }}
                >
                    Clica aqui, por favor.
                </button>
            </div>
        </div>
    )
}

export default Events