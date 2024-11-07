import home from "./images/home.svg";

export function loadHome() {
    const content = document.getElementById("content");
    const image = document.createElement("img");
    const rightDiv = document.createElement("div");
    const headline = document.createElement("h1");
    const paragraph = document.createElement("p");
    

    image.src = home;
    let headlineContent = "Welcome to our Restaurant!";
    let paragraphContent = "Here you can learn all about our entirely adequate process and technically trained cooking team.";

    headline.innerText = headlineContent;
    paragraph.innerText = paragraphContent;

    content.appendChild(image);
    content.appendChild(rightDiv);
    rightDiv.appendChild(headline);
    rightDiv.appendChild(paragraph);
}