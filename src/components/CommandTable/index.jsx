import React, { useState, useEffect } from 'react';
import './style.css';

export default function CommandTable({ gamemodeName = "Flying Scoutsman" }) {
    const [commands, setCommands] = useState([]);
    const [description, setDescription] = useState('');
    const [copyStatus, setCopyStatus] = useState('');

    useEffect(() => {
        getData();
    }, [gamemodeName]);

    function getData() {
        fetch('/commands.json')
            .then(res => res.json())
            .then(data => {
                const gamemode = data.find(g => g.name.toLowerCase() === gamemodeName.toLowerCase());
                if (gamemode) {
                    setCommands(gamemode.commands);
                    setDescription(gamemode.description);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    const getCommandText = () => {
        return commands.map(cmd => cmd.command).join(';');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(getCommandText()).then(() => {
            setCopyStatus('Copied!');
            setTimeout(() => setCopyStatus(''), 2000);
        });
    };

    return (
        <>
            <h3 className="audiowide-regular">{gamemodeName}</h3>
            <p>{description}</p>

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

            <p className='snippet' onClick={handleCopy} title="Click to copy all commands">{getCommandText()}</p>
            <p className='copy'>{copyStatus}</p>
        </>
    );
}
