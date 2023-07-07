const Events = () => {
    const handleMyEvent = () => {
        console.log("Ativou o evento!")
    }

    const renderSomethin = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>

        }
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
            {renderSomethin(true)}
            {renderSomethin(false)}
        </div>
    )
}

export default Events