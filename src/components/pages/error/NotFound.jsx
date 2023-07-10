import { Link } from "react-router-dom";
import "./NotFound.css";


export const NotFound = () => {
    return <div className="notFound">
        <h2>🚧 Página no encontrada 🚧</h2>
        <img src="https://res.cloudinary.com/dtudxtnbv/image/upload/v1688942322/notfound_cy3zyr.png" alt="Error 404 Not Found" />
        <Link to="/"><span>Volver al sitio</span></Link>
    </div>
}


