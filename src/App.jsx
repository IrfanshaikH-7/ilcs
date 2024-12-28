import { Routes, Route } from 'react-router-dom'
import LenisScroll from './components/shared/LenisScroll'
import Navbar from './components/shared/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/shared/Footer'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
function App() {
  return (
    <div className="relative min-h-screen">
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
