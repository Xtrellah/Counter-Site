import CurrencyConverter from '../CurrencyConverter';
import './style.css';
import React, { useEffect, useState } from 'react';

export default function Inventory() {
    // For API paste apiUrl = ''
    
    const [inventoryData, setInventoryData] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await fetch('/inventory.json');
                const data = await response.json();
                setInventoryData(data);
            } catch (error) {
                console.error("Error fetching inventory data:", error);
            }
        };

        fetchInventory();
    }, []);

    return (
        <div className="inventory-container">
            {inventoryData.map((item) => (
                <div key={item.id} className="inventory-item">
                    <img src={item.image} alt={item.marketname} />
                    <h4>{item.marketname}</h4>
                    <CurrencyConverter usd={item.pricelatest}/>
                    <h2>${item.pricelatest}</h2>
                    {/* <h4>Tradeable: {item.tradable ? 'Yes' : 'No'}</h4> */}
                </div>
            ))}
        </div>
    );
}
