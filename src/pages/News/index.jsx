import Blog from "../../components/Blog";

export default function News() {

    return (
        <div className="main">
            <h1 className="audiowide-regular">News</h1>
            <h4>Updates and News from the Counter-Strike community</h4>

            <section className="news-section">
                <div className="news-main">
                    <Blog />
                </div>
            </section>
            
        </div>
    )
}