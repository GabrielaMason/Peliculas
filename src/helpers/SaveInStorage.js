export const SaveInStorage = (key, element) => {

    // Conseguir los elementos ya guarddados
    let elementos = JSON.parse(localStorage.getItem(key));

    // Comprobar si es un array
    if (Array.isArray(elementos)) {
        // Guardar un elemento nuevo
        elementos.push(element);
    } else {
        // Crear un array con la nueva pelicula
        elementos = [element];
    }

    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    // Devolver objeto guardado
    return element;
}