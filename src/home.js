import homeImage from "./home-image.jpg";

export function home() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    
    const logo = document.createElement("h1");
    logo.textContent = "Odin Restaurant";
    
    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra quis est vel convallis.";
    
    const image = document.createElement("img");
    image.className = "home-image";
    image.src = homeImage;
    
    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";

    logoContainer.appendChild(logo);
    logoContainer.appendChild(description);
    homeContainer.appendChild(logoContainer);
    homeContainer.append(image);  
    contentDiv.appendChild(homeContainer);
};