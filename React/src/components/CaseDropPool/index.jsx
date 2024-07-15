import React, { useState, useEffect } from 'react';

export default function CaseDropPool() {

    const [cases, setCases] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => { getData(); }, []);

    function getData() {
        fetch('/Case.json')
            .then(res => res.json())
            .then(data => {
                const currentCases = data.current
                setCases(currentCases)
                if (currentCases.length > 0) {
                    setName(currentCases[0].name)
                }
                console.log(currentCases)
            })
            .catch(error => console.error('Error fetching data:', error))
    }

    return (
        <div>
            <h3 className="audiowide-regular">Current Case Drop Pool</h3>
            <p>Drop rate (%) statistics are approximate and based on historical data.</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Chance</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cases.map((caseItem, index) => (
                        <tr key={index}>
                            <td>{caseItem.name}</td>
                            <td>{caseItem.chance}</td>
                            <td><a href={caseItem.price} target="_blank" rel="noopener noreferrer">Community Market</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}