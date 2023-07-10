const Challenge = () => {
    const n1 = 2
    const n2 = 4
    const total = n1 + n2

    const somar = () => {
        console.log(`O valor total é ${total}`)
    }

    return (
        <div>
            <p>Os números escolhidos são {n1} e {n2}</p>
            <button onClick={somar}>Somar</button>
        </div>
    )
}

export default Challenge