// console.log("Let's build something decent!");
import createAboutPage from './about.js';
import createHomePage from './home.js';
import createMenuPage from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    let divContent = document.getElementById("content");

    function updateContent(content) {
        divContent.innerHTML = content;
    }
    updateContent(createHomePage());

    //event listeners for the buttons, to update the div content based on the button clicked.

    document.getElementById("homeButton").addEventListener("click", () => updateContent(createHomePage()));
    document.getElementById("menuButton").addEventListener("click", () => updateContent(createMenuPage()));
    document.getElementById("aboutButton").addEventListener("click", () => updateContent(createAboutPage()));
});
