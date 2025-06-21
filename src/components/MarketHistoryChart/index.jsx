import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MarketHistoryChart = ({ appid, marketHashName }) => {
    const [chartData, setChartData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketHistory = async () => {
            try {
                const encodedMarketHashName = encodeURIComponent(marketHashName);

                const response = await fetch(
                    `http://127.0.0.1:8000/market/getPriceData/?market_hash_name=${encodedMarketHashName}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error('Market data is missing or malformed.');
                }

                const dates = data.map(entry => entry.date);
                const prices = data.map(entry => parseFloat(entry.price));
                const quantities = data.map(entry => parseInt(entry.quantity));

                setChartData({
                    labels: dates,
                    datasets: [
                        {
                            label: `Price (${marketHashName})`,
                            data: prices,
                            borderColor: 'rgba(75,192,192,1)',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            yAxisID: 'y1',
                            tension: 0.1
                        },
                        {
                            label: 'Quantity Sold',
                            data: quantities,
                            borderColor: 'rgba(255,99,132,1)',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            yAxisID: 'y2',
                            tension: 0.1
                        }
                    ]
                });

                setError(null);
            } catch (err) {
                console.error('Error fetching market history:', err);
                setError(err.message);
            }
        };

        fetchMarketHistory();
    }, [appid, marketHashName]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                }
            },
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Price (USD)',
                },
                beginAtZero: true,
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Quantity Sold',
                },
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                }
            }
        }
    };

    return (
        <div>
            <h2>Steam Market Price History</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : chartData ? (
                <Line data={chartData} options={options} />
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    );
};

export default MarketHistoryChart;
