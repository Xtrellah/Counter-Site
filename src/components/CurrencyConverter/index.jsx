import React from 'react';

export default function CurrencyConverter({ usd }) {
  const gbp = (usd * 0.77).toFixed(2);

  return (
    <div>
        <h2>£{gbp}</h2>
    </div>
  );
}
