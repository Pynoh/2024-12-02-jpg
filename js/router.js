var routes = [
  {
    name: "Thumbnail",
    path: "/thumbnail",
    url: "/pages/thumbnail/thumbnail.html",
  },
  {
    name: "Editor",
    path: "/editor",
    url: "/pages/editor/editor.html",
    loaderJs: loadEditorEvent,
  },
  {
    name: "Home",
    path: "/",
    url: "/pages/home/home.html",
  },
];
/*
    Besoins routeur
        public -> sur this
            +page actuelle (champ en lecture)
            +changement de chemin (fonction)
        privé -> en local de Router
            +champ de route privé en écriture
            +modif url
            +modif contenu
            +récupération du contenu de page depuis le réseau
*/
function Router(rootNode, rootFolderOfTemplates = "/pages") {
  /* définitions locales (internes) des propriétés et functions */
  var currentRoute = undefined;
  function changePathName(pathName) {
    history.pushState(null, null, pathName);
    var routeObject = {};
    routeObject.url = rootFolderOfTemplates;

    switch (pathName) {
      case "/thumbnail":
        routeObject.url += "/thumbnail/thumbnail.html";
        break;
      case "/editor":
        routeObject.url += "/editor/editor.html";
        routeObject.loaderJs = loadEditorEvent;
        break;
      default:
        routeObject.url += "/home/home.html";
        break;
    }
    currentRoute = routeObject;
  }
  function getContentFromNetwork(routeObject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", routeObject.url);
    xhr.onreadystatechange = function (evt) {
      if (xhr.readyState < XMLHttpRequest.DONE) {
        return;
      }
      if (xhr.status >= 400) {
        return console.log("erreur" + xhr.status);
      }
      console.log(xhr.responseText);
      routeObject.template = xhr.responseText;
      loadContentInPage(routeObject);
    };
    xhr.send();
  }
  function loadContentInPage(routeObject) {
    rootNode.innerHTML = routeObject.template;
    if (typeof routeObject.loaderJs === "function") {
      routeObject.loaderJs();
    }
  }

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
    getContentFromNetwork(currentRoute);
  }
  navigate(location.pathname);
}
