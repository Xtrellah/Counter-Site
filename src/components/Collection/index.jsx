import './style.css';
import React, { useState, useEffect } from 'react';

export default function Collection({ collectionRoute }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/market/getCollectionData/${collectionRoute}`);
        const data = await response.json();
        console.log("API response:", data);

        setItems(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionRoute]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="collection-container">
      {items.map((item, index) => (
        <div key={index} className="collection-item">
          <img src={item.image} alt={item.name}/>
          <h4>{item.name}</h4>
          <p>{item.sell_listings} listings starting at {item.sell_price_text}</p>
        </div>
      ))}
    </div>
  );
}
