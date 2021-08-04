import React from 'react'
import { Link } from "react-router-dom";
import CascadaImagen from '../images/cascada.jpg'
import LagoImagen from '../images/lago.jpg'
import LunaImagen from '../images/luna.jpg'
import OtoñoImagen from '../images/otoño.jpg'
import PlayaImagen from '../images/playa.jpg'

const Navegacion = () => {
    return (
        <div>
            <Link to="/Cascada">
                <figure>
                    <img src={CascadaImagen} alt=""></img>
                    <figcaption>Cascada</figcaption>
                </figure>
            </Link>
            <Link to="/Lago">
                <figure>
                    <img src={LagoImagen} alt=""></img>
                    <figcaption>Cascada</figcaption>
                </figure>
            </Link>
            <Link to="/Luna">
                <figure>
                    <img src={LunaImagen} alt=""></img>
                    <figcaption>Cascada</figcaption>
                </figure>
            </Link>
            <Link to="/Otoño">
                <figure>
                    <img src={OtoñoImagen} alt=""></img>
                    <figcaption>Cascada</figcaption>
                </figure>
            </Link>
            <Link to="/Playa">
                <figure>
                    <img src={PlayaImagen} alt=""></img>
                    <figcaption>Cascada</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
