import CaseDropPool from "../../components/CaseDropPool";
import Inventory from "../../components/Inventory";

export default function Home() {

    return (
        <div>
            <h2 className="audiowide-regular">Welcome to Counter-Site | The one-stop shop for all your CS related needs!</h2>
            <h3 className="audiowide-regular">Checkout some features of the site:</h3>
            <a href="/inventory"><h1 className="audiowide-regular">Inventory Viewer</h1></a>
            <a href="/droppool"><h1 className="audiowide-regular">Drop Pool</h1></a>
        </div>
    )
}
