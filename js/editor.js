function loadEditor(params) {
  console.log(params);
  loadEditorEvent;
}

/**
 * Définit l'event de l'éditeur de memes
 */
function loadEditorEvent() {
  document.forms["editor-form"].addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("form submit");
  });
}
