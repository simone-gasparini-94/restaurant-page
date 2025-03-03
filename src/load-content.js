import restaurantImage from "./assets/restaurant.jpg";

export function loadContent() {
    const content = document.querySelector("#content");
    const headline = document.createElement("h1");
    const image = document.createElement("img");
    const text = document.createElement("p");
    headline.classList.add("headline");
    image.src = restaurantImage;
    image.width = 600;
    text.classList.add("text");
    headline.textContent = "My Restaurant";
    text.textContent = "Delicious, plant-based meals made with fresh, locally sourced ingredients. Eat well, live sustainably!"
    content.appendChild(headline);
    content.appendChild(text);
    content.appendChild(image);
}
