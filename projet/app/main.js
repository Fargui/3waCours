import Router from "vanilla-router";

import app from './app.js';
import AboutController from '../controllers/AboutController.js'
import HomeController from '../controllers/HomeController.js'
import LoginController from '../controllers/LoginController.js'
import SearchController from '../controllers/SearchController.js'

import config from './config.js';

import "../static/css/main.css"

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------


function initializeRouter() {
    // Instancier ici le Vanilla Router dans l'objet "app.mvc.router"
    app.mvc.router = new Router({
        mode: 'hash',
        page404: function (path) {
            console.log('"/' + path + '" Page not found');
        }
    });
     
    app.mvc.router.add('home', function () {
        app.mvc.dispatchRoute(new HomeController());
    });
     
    app.mvc.router.add('about', function () {
        app.mvc.dispatchRoute(new AboutController());
    });

    app.mvc.router.add('search', function () {
        app.mvc.dispatchRoute(new SearchController());
    });

    app.mvc.router.add('login', function () {
        app.mvc.dispatchRoute(new LoginController());
    });
     
    app.mvc.router.addUriListener();
     
    app.mvc.router.navigateTo('home');
}


// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter();
});