/*
    Besoins routeur
        public -> sur this
            +page actuelle (champ en lecture)
            + changement de chemin (fonction)
        privé -> en local de Router
            +champ de route privé en écriture
            +modif url
            +modif contenu
            +récupération du contenu de page depuis le réseau
*/
function Router(rootNode, rootFolderOfTemplates = "/pages") {
  /* définitions locales (internes) des propriétés et functions */
  var currentRoute = location.pathname;
  function changePathName(pathName) {
    history.pushState(null, null, pathName);
    currentRoute = location.pathname;
  }
  function getContentFromNetwork(contentUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", contentUrl);
    xhr.onreadystatechange = function (evt) {
      if (xhr.readyState < XMLHttpRequest.DONE) {
        return;
      }
      if (xhr.status >= 400) {
        console.log("erreur" + xhr.status);
      }
      console.log(xhr.responseText);
      rootNode.innerHTML = xhr.responseText;
    };
    xhr.send();
  }
  function loadContentInPage(eventLoader) {}
  /* définitions des accès extérieurs à l'instance */
  /**
   * getter de la route actuelle
   * @returns {string} current pathname
   */
  this.getCurrentRoute = getCurrentRoute;
  function getCurrentRoute() {
    return currentRoute;
  }
  /**
   * Fonction de la navigation avec chargement du contenu
   * @param {string} pathName path to navigate (start with '/')
   */
  this.navigate = navigate;
  function navigate(pathName = "/") {
    changePathName(pathName);
    var url = rootFolderOfTemplates;
    switch (pathName) {
      case "/thumbnail":
        url += "/thumbnail/thumbnail.html";
        break;
      case "/editor":
        url += "/editor/editor.html";
        break;
      default:
        url += "/home/home.html";
        break;
    }
    getContentFromNetwork(url);
    loadContentInPage();
  }
}
