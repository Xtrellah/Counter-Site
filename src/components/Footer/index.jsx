import Banner from '../Banner';
import './style.css';

export default function Footer() {

    const goHome = () => {
        window.location.href = '/';
    }

    return (
        <div className='footer-component'>
            <footer>
                <div className="footer-header">
                    <Banner />
                </div>

                <div className="footer-body">
                    <div className="footer-text">
                        <h2>About us</h2>
                        <p>Counter-Site is a community driven website built to fulfil the needs of the community via the use of the SteamWebAPI.</p>
                        <p>For issues or inqueries with the site, please feel free to contact us through any of the means provided.</p>
                    </div>
                    <div className="contact-details">
                        <h2>Contact</h2>
                        <p>Email: <a href="mailto: contact@counter-site.net">contact@counter-site.net</a></p>
                        <div className="socials">
                            <a href="/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <h4 className="copyright">&copy; Counter-Site 2024 | All rights reserved</h4>
            </footer>
        </div>
    );
}
