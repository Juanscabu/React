import React from 'react'
import { Link } from "react-router-dom";
import CascadaImagen from '../images/cascada.jpg'
import LagoImagen from '../images/lago.jpg'
import LunaImagen from '../images/luna.jpg'
import OtoñoImagen from '../images/otoño.jpg'
import PlayaImagen from '../images/playa.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 container-padre">
            <Link className="links-imgs" to="/Cascada">
                <figure>
                    <img src={CascadaImagen} alt="" className="miniatura"></img>
                    <figcaption>Cascada</figcaption>
                </figure>
            </Link>
            <Link className="links-imgs" to="/Lago">
                <figure>
                    <img src={LagoImagen} alt="" className="miniatura"></img>
                    <figcaption>Lago</figcaption>
                </figure>
            </Link>
            <Link className="links-imgs"  to="/Luna">
                <figure>
                    <img src={LunaImagen} alt="" className="miniatura"></img>
                    <figcaption>Luna</figcaption>
                </figure>
            </Link>
            <Link className="links-imgs" to="/Otoño">
                <figure>
                    <img src={OtoñoImagen} alt="" className="miniatura"></img>
                    <figcaption>Otoño</figcaption>
                </figure>
            </Link>
            <Link className="links-imgs"  to="/Playa">
                <figure>
                    <img src={PlayaImagen} alt="" className="miniatura"></img>
                    <figcaption>Playa</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
