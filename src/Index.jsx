import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Placeholder from "./pages/Placeholder";
import Commands from "./pages/Commands";
import News from "./pages/News";
import InventoryViewer from "./pages/InventoryViewer";
import DropPool from "./pages/DropPool";
import Footer from "./components/Footer";
import CollectionsPage from "./pages/CollectionPage";
import ItemPage from "./pages/ItemPage";


export default function Index() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/news" element={<News />} />
        <Route path="/inventory" element={<InventoryViewer />} />
        <Route path="/droppool" element={<DropPool />} />
        <Route path="/collection" element={<CollectionsPage />} />
        <Route path="/collection/:slug" element={<ItemPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
