export default class HomeController{
    constructor(){
        this.viewPath = "views/home.html"
    }

    executeAfterDomUpdate(){
        console.log("home OK");
    }
}