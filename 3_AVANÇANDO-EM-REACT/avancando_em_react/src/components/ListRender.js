import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Felipe", "Marcos", "Flaubeth"])

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender