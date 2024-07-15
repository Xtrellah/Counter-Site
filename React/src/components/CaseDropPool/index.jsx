import { useState } from "react"

export default function CaseDropPool() {
    const [name, setName] = useState('')


    function getData() {
        fetch('../src/json/Case.json')
            .then(res => res.json())
            .then(Data => {
                setName(current.name)

            })
    }

    return (
        <div>
            <h3 className="audiowide-regular">Current Case Drop Pool</h3>
            <p>Drop rate (%) statistics are approximate and based on 1000s of accounts.</p>

            <p>test {name}</p>

        </div>
    )
}