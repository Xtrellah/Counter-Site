import React, { useState, useEffect } from 'react'

export default function Commands() {

    const [commands, setCommands] = useState([])
    const [name, setName] = useState('')

    useEffect(() => { getData(); }, [])

    function getData() {
        fetch('/commands.json')
            .then(res => res.json())
            .then(data => {
                const tableCommands = data.table
                setCommands(tableCommands)
                if (currentCases.length > 0) {
                    setName(tableCommands[0].command)
                }
                console.log(tableCommands)
            })
            .catch(error => console.error('Error fetching data:', error))
    }

    return (
        <div>
            <h3 className="audiowide-regular">Flying Scountsman</h3>
            <p>Coms for flyign scoutsman</p>
            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {commands.map((commandItem, index) => (
                        <tr key={index}>
                            <td>{commandItem.command}</td>
                            <td>{commandItem.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}