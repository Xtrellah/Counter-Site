import './style.css';

export default function Home() {

    return (
        <div className="main">
            <h1 className="audiowide-regular">Welcome to Counter-Site</h1>
            <p>The one-stop shop for all your CS related needs!</p>
            <h2 className="audiowide-regular">Checkout some features of the site:</h2>
            <div className="featured">
                <a href="/inventory"><h1 className="audiowide-regular">Inventory Viewer</h1></a>
                <a href="/droppool"><h1 className="audiowide-regular">Drop Pool</h1></a>
                <a href="/collection"><h1 className="audiowide-regular">Collection Viewer</h1></a>
            </div>
        </div>
    )
}
