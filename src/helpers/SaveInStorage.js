export const SaveInStorage = movie => {

    // Conseguir los elementos ya guarddados
    let elementos = JSON.parse(localStorage.getItem('pelis'));

    // Comprobar si es un array
    if (Array.isArray(elementos)) {
        // Guardar un elemento nuevo
        elementos.push(movie);
    } else {
        // Crear un array con la nueva pelicula
        elementos = [movie];
    }

    // Guardar en el localStorage
    localStorage.setItem('pelis', JSON.stringify(elementos));

    // Devolver objeto guardado
    return movie;
}