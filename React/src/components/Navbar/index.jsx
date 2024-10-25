import './style.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {

    const location = useLocation();

    useEffect(() => {
        const links = document.querySelectorAll('a');
        let currentPath = location.pathname.split("/").pop();

        if (currentPath === '') {
            currentPath = '';
        }

        links.forEach(link => {
            const hrefPath = link.getAttribute('href').split("/").pop();
            console.log('LOOK HERE' + hrefPath)

            if (hrefPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, [location]);

    return (
        <ul className="navbar" id="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/Commands">Commands</a></li>
            <li><a href="/News">News</a></li>
            <li><a href="/Placeholder">Login</a></li>
        </ul>
    );
}
