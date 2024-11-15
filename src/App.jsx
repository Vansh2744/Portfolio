import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
