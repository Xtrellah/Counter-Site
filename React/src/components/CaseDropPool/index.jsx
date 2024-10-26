import './style.css';
import React, { useState, useEffect } from 'react';

export default function CaseDropPool({ caseType = 'current' }) {
    const [cases, setCases] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => { getData(); }, [caseType]);

    function getData() {
        fetch('/case.json')
            .then(res => res.json())
            .then(data => {
                const selectedCases = data[caseType];
                setCases(selectedCases);
                if (selectedCases.length > 0) {
                    setName(`${caseType.charAt(0).toUpperCase() + caseType.slice(1)} Case Drop Pool`);
                }
                console.log(selectedCases);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <div>
            <h3 className="audiowide-regular">{name}</h3>
            <p>Drop rate (%) statistics are approximate and based on historical data.</p>
            <table>
                <thead>
                    <tr>
                        <th>Case</th>
                        <th>Drop Chance (%)</th>
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
    );
}