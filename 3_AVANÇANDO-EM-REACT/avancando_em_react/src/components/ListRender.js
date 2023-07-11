import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Felipe", "Marcos", "Flaubeth"])

    const [users] = useState([
        { id: 1, name: "Felipe Zeri", age: 31},
        { id: 203, name: "Felipe Jahnel", age: 20},
        { id: 302, name: "Felipe", age: 41},
    ])

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender