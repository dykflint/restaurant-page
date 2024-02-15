import createHomePage from "./home.js";
import createMenu from "./menu.js";
import LynnsTable from './images/lynn.svg';

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const headerImageDiv = document.querySelector('#header-image');
// add header image
headerImageDiv.setAttribute('id', 'header-image');
const headerImage = new Image();
headerImage.src = LynnsTable;
headerImageDiv.appendChild(headerImage);
homeButton.addEventListener("click", createHomePage);
menuButton.addEventListener("click", createMenu);
// default page is home page
createHomePage();