let app = {
    // ----------------------------------------------------------------------------------------------------------------
    // MANIPULATION DU DOM DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    dom: {
    },


    // ----------------------------------------------------------------------------------------------------------------
    // ARCHITECTURE MVC DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    mvc: {
        router : null,
        dispatchRoute : (controllerInstance) =>{
            fetch(controllerInstance.viewPath).then((res)=>res.text())
            .then((htmlString)=> {
                //Mettre à jour le main avec ce contenu 
                document.querySelector('.lol').innerHTML = htmlString;
                //declencger la methode execute du ctrl
                controllerInstance.executeAfterDomUpdate()
            })
        }
    }
};


// L'application est exportée afin d'être accessible par d'autres modules.
export default app;