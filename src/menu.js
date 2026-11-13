import item1Img from "./item-1.jpg";
import item2Img from "./item-2.jpg";
import item3Img from "./item-3.jpg";
import item4Img from "./item-4.jpg";
import item5Img from "./item-5.jpg";
import item6Img from "./item-6.jpg";

export function menu() {
    const itemsImg = [item1Img, item2Img, item3Img, item4Img, item5Img, item6Img]; 

    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    const sectionHeading = document.createElement("h1");
    sectionHeading.textContent = "Menu";

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const menuGrid = document.createElement("div");
    menuGrid.classList = "menu-grid";

    for (let i = 1; i <= 6; i++) {
        const itemGrid = document.createElement("div");
        const itemName = document.createElement("p");
        itemName.textContent = `Item ${i}`;
        itemGrid.appendChild(itemName);
        itemGrid.style.backgroundImage = `url(${itemsImg[i-1]})`;
        menuGrid.appendChild(itemGrid);
    }

    const orderNowBtn = document.createElement("button");
    orderNowBtn.textContent = "Order now";
    
    menuContainer.appendChild(sectionHeading);
    menuContainer.appendChild(menuGrid);
    menuContainer.appendChild(orderNowBtn);

    contentDiv.appendChild(menuContainer);
}