import "./styles.css";
import { home } from "./home.js";

const homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", () => {
    home();
});

home();