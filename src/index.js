import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

document.querySelector("nav").addEventListener("click",loadPage);

function loadPage(e) {
    document.getElementById("content").innerHTML='';
    switch (e.target.innerText){
        case "Home":
            loadHome();
            break;
        case "Menu":
            loadMenu();
            break;
        case "About":
            loadAbout();
            break;
    }
}

document.body.onload = loadHome();
