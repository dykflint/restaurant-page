import createHomePage from "./home.js";
import createMenu from "./menu.js";

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');

homeButton.addEventListener("click", createHomePage);
menuButton.addEventListener("click", createMenu);
// default page is home page
createHomePage();