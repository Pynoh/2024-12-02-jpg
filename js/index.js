if(confirm("Le fichier js est chargé")) {
    console.log("C'est okaaaay");
    var jsnotif = document.querySelector('#js-notification');
    jsnotif.style.backgroundColor = 'green';
    jsnotif.innerHTML = "JS OK ! \\o/" ;
}