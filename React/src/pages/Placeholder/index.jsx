import './style.css'

export default function Placeholder() {

    return (
        <div className="main">
            <h1 className="audiowide-regular">Oops...</h1>

            <div className="placeholder">
                <div>
                    <h3 className="audiowide-regular">We're Working on it!</h3>
                    <p>This page is currently under construction, and if we're anything like valve you'll likely never see it finished!</p>
                    <p>In the mean time here are some images of somewhere else under construction... ar_dizzy!</p>
                    <p>Btw when is flying scoutsman coming to CS2???</p>
                </div>
                <img src="../src/assets/ar-dizzy-icon.webp" alt="ar_dizzy map icon" width="300" height="300" />
            </div>
        </div>
    )
}