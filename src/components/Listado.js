import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        getMovies();
    }, []) // Se ejecuta una vez cuando se cargue el componente

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('pelis'));
        setListadoState(movies);
        console.log(listadoState);
    }

    return (
        <>
            {listadoState ? listadoState.map(movie => {
                return (
                    <article key={movie.id} className="peli-item">
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>
                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>
                )
            })
                :
                <h2>No hay películas para mostrar.</h2>
            }
        </>
    )
}