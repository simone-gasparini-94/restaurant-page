import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

document.addEventListener("DOMContentLoaded", loadHome);
homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);
