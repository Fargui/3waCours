export default class SearchController{
    constructor(){
        this.viewPath = "views/search.html"
    }

    executeAfterDomUpdate(){
        console.log("Search OK");
    }
}