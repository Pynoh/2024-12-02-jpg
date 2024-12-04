function loadingDOM() {
  console.log("C'est okaaaay");
  var jsnotif = document.querySelector("#js-notification");
  jsnotif.style.backgroundColor = "green";
  jsnotif.innerHTML = 'JS OK ! <span id="victory-man">\\o/</span>';
  var victoryMan = jsnotif.children[0];
  victoryMan.style.fontStyle = "italic";
  victoryMan.style.color = "red";
  //document.querySelector("#header-button").remove();
  jsnotif.remove(); // on a bien chargé le document, on peut retirer la bannière
  document
    .querySelector("#header-button")
    .addEventListener("click", function (evt) {
      console.log("header button", evt);
      console.log("tout va bien");
    });
}
document.addEventListener("DOMContentLoaded", loadingDOM);
