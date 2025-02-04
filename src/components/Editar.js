import React from 'react'

export const Editar = ({ movie, getMovies, setEditar, setListadoState }) => {
    const titulo_componente = 'Editar película';

    const saveChanges = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const storedMovies = getMovies();
        const index = storedMovies.findIndex(movie => movie.id === id);

        // Crear objeto con ese index
        let updated_movie = {
            id,
            title: target.title.value,
            description: target.description.value
        };

        // Actualizar el elemento con ese index
        storedMovies[index] = updated_movie;

        // Guardar el nuevo objeto en el localstorage
        localStorage.setItem('pelis', JSON.stringify(storedMovies));

        // Actualizar estados
        setListadoState(storedMovies);
        setEditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>
            <form onSubmit={e => saveChanges(e, movie.id)}>
                <input type='text' name='title' className='titulo_editado' defaultValue={movie.title} />
                <textarea name='description' defaultValue={movie.description} className='descripcion_editada' />
                <input type='submit' className='editar' value='actualizar' />
            </form>
        </div>
    )
}
