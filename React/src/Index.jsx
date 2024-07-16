import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Placeholder from "./pages/Placeholder";
import Commands from "./pages/Commands";


export default function Index() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/commands" element={<Commands />} />
      </Routes>

    </BrowserRouter>
  )
}
