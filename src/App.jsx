import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Portfolio from './pages/Portfolio.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <>
        <BrowserRouter>
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
     </>
  )
}

export default App
