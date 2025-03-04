import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { toggleActive } from "./buttons.js";

const buttons = document.querySelectorAll("button");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

document.addEventListener("DOMContentLoaded", loadHome);
buttons.forEach(button => {
    button.addEventListener("click", toggleActive);
});
homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);

