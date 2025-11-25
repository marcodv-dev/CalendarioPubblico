import '../components/title.css'
import { useNavigate } from "react-router-dom";
import Back from '../assets/left-arrow.png'

export const Title =({mostraBack})=>{

    const navigate = useNavigate();

    const back =()=>{
        navigate("/");
    }

    return(
        <div className="Titolo">
            {mostraBack && <div className='esterno uno'>
                <button className="back" onClick={back}><img src={Back} alt="" /></button>
            </div>}
            <div>
                <h1>2° calendario dell'avvento</h1>
                <h2>Anna Nodari - 2025</h2>
            </div>
            {mostraBack && <div className='esterno due'></div>}
        </div>
    );
}