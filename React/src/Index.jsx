import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Placeholder from "./pages/Placeholder";
import Commands from "./pages/Commands";
import Feed from "./pages/Feed";


export default function Index() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>

    </BrowserRouter>
  )
}
