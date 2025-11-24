import Calendario from '../src/pages/calendario.jsx'
import Dettagli_casella from '../src/pages/dettagli_casella.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
//import './App.css'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Calendario />} />
                <Route path="/dettagli_casella" element={<Dettagli_casella />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
  return (
    <Router>
        <AnimatedRoutes />
    </Router>
  )
}

export default App
