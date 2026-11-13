export function about() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";

    const sectionHeading = document.createElement("h1");
    sectionHeading.textContent = "About us";

    const aboutPara = document.createElement("p");
    aboutPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque elementum eros. Ut magna leo, pellentesque vel tincidunt vitae, consequat quis tellus. Quisque condimentum vitae ligula at luctus. Mauris euismod elit bibendum lorem porta, in euismod urna cursus. Proin mauris erat, interdum eu elit ut, molestie bibendum est. Cras ultrices ut sapien quis fermentum. Mauris eget lorem scelerisque, iaculis ipsum eu, venenatis leo. Vestibulum ac justo risus. Pellentesque quis nisl nec nibh mattis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vehicula ante vel ex mollis tempus. Quisque id pellentesque odio. Duis ullamcorper leo at urna ornare, sed suscipit sem convallis. Maecenas lobortis nunc nec dolor luctus laoreet. In feugiat blandit leo, ac viverra elit accumsan ac.";

    const contactCard = document.createElement("div");
    contactCard.classList.add("about-card");

    const aboutCard = document.createElement("div");
    aboutCard.classList.add("about-card");

    const contactInformationHeading = document.createElement("h2");
    contactInformationHeading.textContent = "Contact Informations";

    const address = document.createElement("p");
    address.textContent = "Address: 456 Nordic Street, New York, NY";

    const phone = document.createElement("p");
    phone.textContent = "Phone: (555) 123-4567";

    const email = document.createElement("p");
    email.textContent = "Email: email@example.com";

    const openingHours = document.createElement("p");
    openingHours.textContent = "Opening hours: Monday - Sunday: 11 AM - 10 PM";

    aboutContainer.appendChild(sectionHeading);
    aboutCard.appendChild(aboutPara);
    aboutContainer.appendChild(aboutCard);

    aboutContainer.appendChild(contactInformationHeading);
    contactCard.appendChild(address);
    contactCard.appendChild(phone);
    contactCard.appendChild(email);
    contactCard.appendChild(openingHours);
    aboutContainer.appendChild(contactCard);

    contentDiv.appendChild(aboutContainer);
}