import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Title } from '../components/title.jsx'
import '../pages/dettagli_casella.css'

export default function Dettagli_casella(){
    const location = useLocation();
    const { ID, foto, descrizione, isDicembre, is25Dicembre } = location.state || {};

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
                    {!isDicembre || !is25Dicembre && <div className="Descrizione">
                        <h4>{ID} Dicembre</h4>
                        <p>{descrizione}</p>
                    </div>}
                    {(isDicembre&&is25Dicembre) && <div className="Natale">
                        <h4>{ID} Dicembre</h4>
                        <div className="spazioNatale"></div>
                        <h3 className="titoloNatale"><i>buon natale</i></h3>
                        <h3 className="titoloNatale"><i>principessa</i></h3>
                        <h3 className="titoloNatale">❤️❤️❤️</h3>
                        <div className="spazioNatale"></div>
                        <p className="paragrafoNatale">So che la cosa più importante che <b>sappiamo</b> l'uno dell'altra non ce la siamo ancora detta, anche se la pensiamo entrambi, quindi dirò qualcos'altro:</p>
                        <p className="paragrafoNatale"><b>Sei la mia vita</b>, intendo che tutta la mia vita gira attorno a te, quando mi succede qualcosa sei la prima che lo sa, molte volte anche l'unica, la mia feicità dipende dalla tua e amo vederti felice</p>
                        <p className="paragrafoNatale"><b>Mi manchi</b>, sempre, tantissimo, ma intendo che ti immagino qui vicino a me per sentire meno la tua mancanza, immagino i tuoi occhi mentre mi guardi, la tua voce, il tuo sorriso</p>
                        <p className="paragrafoNatale">L'ultima cosa che volevo dirti è che per tutti questi giorni, in ogni pensiero, <b>non ho mai finito una singola frase con un punto</b>, questo perché voglio che tra noi non finisca mai, che continui per sempre e farò di tutto perché accada ❤️❤️❤️❤️❤️❤️</p>
                    </div>}
                    
                </motion.div>
            </div>
        
        
    );
}
