import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const CrearPelicula = ({setListadoState}) => {
    const titulo = "Añadir película";
    const [movieState, setMovieState] = useState({title: '', description: ''});

    const {title, description} = movieState;

    const getFormData = e => {
        e.preventDefault();

        // Conseguir datos del fomrulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        // Objeto de pelicula
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };

        // Se guarda el estado
        setMovieState(movie);

        // Actualizar estado del estado principal
        setListadoState(elementos => {
            return [...elementos, movie]; //Agregar a los elementos que ya existen uno nuevo
        })

        // Almacenamiento local
        SaveInStorage('pelis', movie);
    }

    return (
        <>
            <div className="add">
                <h3 className="title">{titulo}</h3>
                <strong>
                    {(title && description) && "Has creado la película: " + title}
                </strong>
                <form onSubmit={getFormData}>
                    <input type="text" id='title' name='title' placeholder="Título" />
                    <textarea id="description" name="description" placeholder="Descripción"></textarea>
                    <input type="submit" id='saves' value="guardar" />
                </form>
            </div>
        </>
    )
}
