import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Placeholder from "./pages/Placeholder";
import Commands from "./pages/Commands";
import Banner from "./components/Banner";
import News from "./pages/News";
import InventoryViewer from "./pages/InventoryViewer";
import DropPool from "./pages/DropPool";
import Footer from "./components/Footer";
import CollectionViewer from "./pages/CollectionViewer";


export default function Index() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/news" element={<News />} />
        <Route path="/inventory" element={<InventoryViewer />} />
        <Route path="/droppool" element={<DropPool />} />
        <Route path="/collection" element={<CollectionViewer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
