import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

homeBtn.addEventListener("click", () => {
    home();
});

menuBtn.addEventListener("click", () => {
    menu();
});

home();