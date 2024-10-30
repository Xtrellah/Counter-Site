import Collection from "../../components/Collection";

export default function CollectionViewer() {

    return (
        <div className="main">
            <h1 className="audiowide-regular">Collection Viewer</h1>
            <p>Currently viewing the Dust 2 collection</p>

            <Collection />
            
        </div>
    )
}