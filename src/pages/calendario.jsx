
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cuore from '../assets/cuore.png'
import '../pages/calendario.css'
import '../components/title.jsx'
import { useNavigate } from "react-router-dom";
import { Title } from "../components/title.jsx";

export default function SearchRCalendariooute() {
    const navigate = useNavigate();

    useEffect(()=>{
        mostraCalendario();
    },[]);

    const [caselle,setCaselle] = useState([]);

    const mostraCalendario =()=>{
        fetch(`${import.meta.env.VITE_API_URL}/api/caselle`,{
            method:"GET",
            headers:{ "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCaselle(data);
        })
        .catch(err => console.error(err));
    }

    const selezionato =(c)=>{
        const ID = c.ID;
        const foto = c.Foto;
        const descrizione = c.Descrizione;

        console.log("click");
        console.log(ID,foto,descrizione);

        //completata(c.ID);

        navigate("/dettagli_casella", {
            state: {
                ID,foto,descrizione
            },
        });
    }

    const completata=(ID)=>{
        fetch(`${import.meta.env.VITE_API_URL}/api/casella_completata`,{
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify({ id: ID })
        })
        .then(()=>{
            console.log("Completata!");
            mostraCalendario();
        })
        .catch(err => console.error(err));
    }

    return(
        
        <div className="Calendario">
            {/* <h1>2° calendario dell'avvento</h1>
            <h2>Anna Nodari - 2025</h2> */}
            <Title mostraBack={false}></Title>
            <motion.div
                className="Calendario"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <div className={`corpo ${caselle.length>0?'pieno':'vuoto'}`}>
                    {caselle.length==0 && 
                        <label htmlFor="">Non siamo ancora a Dicembre!</label>
                    }
                    {caselle.length>0 && caselle.map((c,i)=>(
                        <div key={i}>
                            <button onClick={()=>(selezionato(c))} /* disabled={c.Completata === 1} */ className={`${c.Completata === 1?'Completata':''}`}>
                                <label htmlFor="">{c.ID}</label>
                                <img src={cuore} alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}