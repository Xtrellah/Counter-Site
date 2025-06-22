import './style.css';
import React, { useState, useEffect } from 'react';
import Collection from "../../components/Collection";

export default function CollectionSelect() {
  const [collections, setCollections] = useState([]);
  const [collectionName, setCollectionName] = useState("Dust 2");
  const [collectionTag, setCollectionTag] = useState("?tag_set_dust_2");

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('/collection.json');
        const data = await response.json();
        setCollections(data.collection || []);
      } catch (error) {
        console.error('Error loading collection list:', error);
      }
    };

    fetchCollections();
  }, []);

  const handleCollectionChange = (name, tag) => {
    setCollectionName(name);
    setCollectionTag(tag);
  };

  return (
          <div>
      <h1 className="audiowide-regular">Collection Viewer</h1>

      <ul className="collection-list">
        {collections.map((col) => (
          <li
            key={col.tag}
            className={collectionTag === col.tag ? "selected" : ""}
            onClick={() => handleCollectionChange(col.name, col.tag)}
          >
            {col.name}
          </li>
        ))}
      </ul>

      <h2><strong>{collectionName}</strong> Collection</h2>

      <Collection collectionRoute={collectionTag} />
          </div>
        );
}
