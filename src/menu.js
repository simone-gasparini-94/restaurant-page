export function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("menu-container");
    
    const menuItems = [
        {
            name: "Golden Chickpea Curry",
            description: "A fragrant blend of coconut milk, chickpeas, and seasonal vegetables, served with jasmine rice and fresh herbs."
        },
        {
            name: "Jackfruit BBQ Burger",
            description: "Pulled jackfruit marinated in smoky BBQ sauce, topped with coleslaw and vegan aioli, served in a fresh sourdough bun."
        },
        {
            name: "Raw Chocolate & Hazelnut Tart",
            description: "A rich and creamy raw cacao tart with a hazelnut crust, sweetened naturally with dates and maple syrup."
        },
    ];

    menuItems.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const title = document.createElement("h2");
        title.classList.add("item-title");
        title.textContent = item.name;

        const description = document.createElement("p");
        description.classList.add("item-description");
        description.textContent = item.description;

        itemContainer.append(title, description);
        container.appendChild(itemContainer);
    });

    content.appendChild(container);
}