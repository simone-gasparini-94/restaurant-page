export function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("home-container");

    const headline = document.createElement("h1");
    headline.classList.add("headline");
    headline.textContent = "Plant Bliss – Vegan Cuisine";

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = "At Plant Bliss, we bring you the finest plant-based dishes made from fresh, organic, and locally sourced ingredients. Experience a fusion of flavors, sustainability, and health – all on one plate. Whether you’re a dedicated vegan or simply curious, our meals will leave you feeling nourished and inspired."
    
    container.append(headline, text);
    content.appendChild(container);
}
