import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Title } from '../components/title.jsx'
import '../pages/dettagli_casella.css'

export default function Dettagli_casella(){
    const location = useLocation();
    const { ID, foto, descrizione } = location.state || {};


    return(
        
            <div className="Dettagli_casella">
                <Title mostraBack={true}></Title>
                <motion.div
                    className="Dettagli_casella"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    <div className="Descrizione">
                        <h4>{ID} Dicembre</h4>
                        <p>{descrizione}</p>
                    </div>
                </motion.div>
            </div>
        
        
    );
}