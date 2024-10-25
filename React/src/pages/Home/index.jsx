import CaseDropPool from "../../components/CaseDropPool";
import Inventory from "../../components/Inventory";

export default function Home() {

    return (
        <div>
            <h2 className="audiowide-regular">Welcome to Counter-Site</h2>
            <h4>The one-stop shop for all your CS2 related needs!</h4>
            <Inventory />
            <CaseDropPool />
        </div>
    )
}