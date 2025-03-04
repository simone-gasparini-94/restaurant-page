export function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("menu-container");

    const elements = [
        {
            label: "Address:",
            text: "Schönhauser Allee 32, 10435 Berlin, Germany",
        },
        {
            label: "Phone Number:",
            text: "+49 30 1234 5678"
        }
    ];

    elements.forEach(element => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const label = document.createElement("h2");
        label.classList.add("label");
        label.textContent = element.label;

        const text = document.createElement("p");
        text.classList.add("text");
        text.textContent = element.text;

        itemContainer.append(label, text);
        container.appendChild(itemContainer);
    });

    content.appendChild(container);
}