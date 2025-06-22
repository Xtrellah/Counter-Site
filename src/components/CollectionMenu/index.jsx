import './style.css';
import React, { useState, useEffect } from 'react';

export default function CollectionMenu({ collectionRoute }) {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('/collection.json');
        const data = await response.json();
        setCollections(data.collection || []);
      } catch (error) {
        console.error('Error loading collection list:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCollections();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="collection-container">
      {collections.map((col, index) => (
        <div key={index} className="collection-item">
          <h4>{col.name}</h4>
          <p>{col.release_date}</p>
        </div>
      ))}
    </div>
  );
}

