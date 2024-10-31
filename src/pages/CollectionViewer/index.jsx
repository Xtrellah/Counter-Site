import './style.css';
import React, { useState } from 'react';
import Collection from "../../components/Collection";

export default function CollectionViewer() {
    const [collectionName, setCollectionName] = useState("dust2");

    const handleCollectionChange = (name) => {
        setCollectionName(name);
    };

    return (
        <div className="main">
            <h1 className="audiowide-regular">Collection Viewer</h1>
            <p>Currently viewing the {collectionName} collection</p>

            <ul className="collection-list">
                {["Dust2", "Mirage", "Inferno", "Nuke", "Train"].map((name) => (
                    <li key={name} className={collectionName === name ? "selected" : ""} onClick={() => handleCollectionChange(name)}>
                        {name}
                    </li>
                ))}
            </ul>

            <Collection collectionRoute={collectionName} />
        </div>
    );
}
