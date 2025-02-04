import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [search, setSearch] = useState('');
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) => {
        // Crear estado y actualizar
        setSearch(e.target.value);

        // Filtrar coincidencias

        let found_movies = listadoState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        })

        if (search.length > 1 || found_movies <= 0) {
            found_movies = JSON.parse(localStorage.getItem('pelis'));
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        // Actualizar el listado principal
        setListadoState(found_movies);
    }

    return (
        <>
            <div className="search">
                <h3 className="title">Buscador</h3>
                {(notFound === true && search.length > 1) &&  (<span className='not_found'>No hay coincidencias</span>)}
                <form>
                    <input type="text" 
                        id='search_field'
                        name='search'
                        autoComplete='off'
                        value={search}
                        onChange={searchMovie}
                    />
                    <button id='search'>Buscar</button>
                </form>
            </div>
        </>
    )
}
