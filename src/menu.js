import home from "./images/home.svg";

export function loadMenu() {
    const content = document.getElementById("content");
    const image = document.createElement("img");
    const rightDiv = document.createElement("div");
    const headline = document.createElement("h1");
    const menu = document.createElement("ul");
    

    image.src = home;
    let headlineContent = "Welcome to our Restaurant!";
    let menuContent = "<li>Burgers</li><li>Hotdogs</li><li>Pizza</li>";

    headline.innerText = headlineContent;
    menu.innerHTML = menuContent;

    content.appendChild(image);
    content.appendChild(rightDiv);
    rightDiv.appendChild(headline);
    rightDiv.appendChild(menu);
}