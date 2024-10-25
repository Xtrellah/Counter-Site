import './style.css';

export default function Banner() {

    const goHome = () => {
        window.location.href = '/';
    }

    return (
        <div className='banner'>
            <img onClick={goHome} src="..\src\assets\ar-dizzy-icon.webp" alt="Logo" />
            <h1 onClick={goHome} className="audiowide-regular">Counter-Site</h1>
        </div>
    );
}
