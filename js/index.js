function loadingDOM() {
  console.log("C'est okaaaay");
  var jsnotif = document.querySelector("#js-notification");
  jsnotif.style.backgroundColor = "green";
  jsnotif.innerHTML = 'JS OK ! <span id="victory-man">\\o/</span>';
  var victoryMan = jsnotif.children[0];
  victoryMan.style.fontStyle = "italic";
  victoryMan.style.color = "red";
  var buttonHeader = document.querySelector("#header-button");
  buttonHeader.addEventListener("click", function (evt) {
    evt.stopPropagation();
    console.log(evt);
    console.log("Au secours");
  });
  document.querySelector("#header").addEventListener("click", function (evt) {
    console.log(evt);
    console.log("tout va bien");
  });
}
document.addEventListener("DOMContentLoaded", loadingDOM);
