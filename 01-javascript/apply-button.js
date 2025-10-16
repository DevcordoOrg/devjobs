const jobsListingSection = document.querySelector('.jobs-listings');
jobsListingSection?.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('button-apply-job')){
        element.textContent = "¡Aplicado!";
        element.classList.add("is-applied");
        element.disabled = true;
    }
});

/**________________________________________________________________________________ */

/** Comentarios con otros eventos de utilidad                                       */
/**________________________________________________________________________________ */

/***********************************************************
 * Recuperar el primer boton que cumpla con la llamda      *
 ***********************************************************/ 

// const boton = document.querySelector(".button-apply-job");

// boton.addEventListener('click', () => {
//     boton.textContent = "¡Ya aplicaste!";
//     boton.classList.add("is-applied");
//     boton.disabled = true;
// });


/************************************************************* 
 * Recupera un lista de objetos que cumplan con la llamada   *
 *                                                           *
 * Nota: No es una manera tan adecuada ya que si hay 1000    *
 *       o una cantidad muy grade de objetos a recuperar,    *
 *       esta forma es muy poco eficiente ya que carga todos * 
 *       los objetos en la primera carga                     *
 *                                                           *
 *************************************************************/

// const botones = document.querySelectorAll(".button-apply-job");

// botones.forEach(boton => {
//     boton.addEventListener('click', () => {
//         boton.textContent = "¡Aplicado!";
//         boton.classList.add("is-applied");
//         boton.disabled = true;
//     });
// })

/*********************************************************************************
 * Forma más adecuada de llamar la lista de objetos que cumplan con la llamada   *
 *                                                                               *
 * Nota: En ves de agregarle un evento a cada objeto, es mejor llamar aplicar    *
 *       un solo evento a un objeto (contenedor padre) y detectar cuando se dio  *
 *       clic en el contenedor padre, identificar al objeto que recibio el clic  *
 *       de este modo es más eficiente, a demás, funciona para cada nuevo objeto *
 *       que se agregue dinámicamente.                                           *
 *                                                                               *
 *********************************************************************************/

/**
 * **********************************************************************
 * Formas de recuperar eventos de un documento                          *
 * **********************************************************************
 
const searchInput = document.querySelector("#empleos-search-input");

searchInput.addEventListener("input", () => {
    console.log(searchInput.value);
})

searchInput.addEventListener("blur", () => {
    console.log("Se dispara cuando el input pierde el foco");
})

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.textContent);
})

document.addEventListener('keydown', (event) => {
    console.log(event.key);
});
 */

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         return response.json();
//     })
//     .then(json => {
//         console.log(json);
//     })