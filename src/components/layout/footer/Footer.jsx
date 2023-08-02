import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { MdPlace } from "react-icons/md";
import { BsQuestionOctagon } from "react-icons/bs";
import "./Footer.css";

export const Footer = () => {
    return (
    <footer id="grilla_footer">
        <div className="ubicacion">
            <h2>Donde encontrarnos</h2>
            <h3>
                <a href="https://www.google.com/maps" target="_blank" rel="noreferrer"><MdPlace /> Av. Constituyentes 3245 (CABA)</a>
            </h3>
        </div>
        <div>
            <h2>Contacto</h2>
            <ul className="redes">
                <li className="redes_item">
                    <a href="https://www.instagram.com/alee_tomkiewicz/" target="_blank" rel="noreferrer">
                        <InstagramIcon fontSize="large" />
                    </a>
                </li>
                <li className="redes_item">
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                        <WhatsAppIcon fontSize="large" />
                    </a>
                </li>
                <li className="redes_item">
                    <a href="https://www.linkedin.com/in/alejo-tomkiewicz-44841a245/" target="_blank" rel="noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h2><span className="faq_h2">Preguntas frequentes y</span> ayuda</h2>
            <ul className="faq">
                <li><a href="#">Preguntas frecuentes (FAQ)</a></li>
                <li><a href="#"><BsQuestionOctagon /> Ayuda</a></li>
            </ul>
        </div>
    </footer>    
    )
}

