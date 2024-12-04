/**
 * Chargement initial du js de la page lancé à la fin du chargement du DOM
 */
function loadingDOM() {
  document.querySelector("#js-notification").remove();
  document.querySelector("#header-button").remove();
  loadNavbarEvents();
}

/**
 * Chargement des events de la navbar
 */
function loadNavbarEvents() {
  document.querySelectorAll("nav a").forEach(function (elt, key) {
    elt.addEventListener("click", (evt) => {
      evt.preventDefault();
    });
  });
  document.querySelectorAll("nav a").forEach();
}

document.addEventListener("DOMContentLoaded", loadingDOM);
