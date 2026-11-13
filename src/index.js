import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => {
    home();
});

menuBtn.addEventListener("click", () => {
    menu();
});

aboutBtn.addEventListener("click", () => {
    about();
});

home();