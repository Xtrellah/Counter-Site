import Blog from "../../components/Blog";

export default function Feed() {

    return (
        <div>
            <h1 className="audiowide-regular">Feed</h1>
            <p>Updates and News</p>

            <section class="news-section">
                <div class="news-main">
                    <Blog />
                </div>
            </section>
            
        </div>
    )
}