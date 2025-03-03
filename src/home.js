export function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const headline = document.createElement("h1");
    const text = document.createElement("p");
    headline.classList.add("headline");
    text.classList.add("text");
    headline.textContent = "Plant Bliss – Vegan Cuisine";
    text.textContent = "At Plant Bliss, we bring you the finest plant-based dishes made from fresh, organic, and locally sourced ingredients. Experience a fusion of flavors, sustainability, and health – all on one plate. Whether you’re a dedicated vegan or simply curious, our meals will leave you feeling nourished and inspired."
    content.appendChild(headline);
    content.appendChild(text);
}
