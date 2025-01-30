import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { CrearPelicula } from "./components/CrearPelicula";
import { Listado } from "./components/Listado";

function App() {

    const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>

        {/* Barra de navegacion */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido Principal */}
        <section className="content">
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <Buscador />
            <CrearPelicula setListadoState={setListadoState}/>
        </aside>

        {/* Pie de pagina */}
        <footer className="footer">
            &copy; <a href="https://gabrielamasonweb.es">Gabriela V Mason</a>
        </footer>
    </div>
  );
}

export default App;
