import './style.css';
import React, { useState, useEffect } from 'react';

export default function SteamMarketItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost/php-storm/Counter-Site-Backend/src/collection.php');
        const data = await response.json();
        console.log("API response:", data);

        setItems(data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="collection-container">
      {items.map((item, index) => (
        <div key={index} className="collection-item">
          <img
            src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.asset_description.icon_url}`}
            alt={item.name}
          />
          <h4>{item.name}</h4>
          <p>{item.sell_listings} listings starting at {item.sell_price_text}</p>
        </div>
      ))}
    </div>
  );
}

