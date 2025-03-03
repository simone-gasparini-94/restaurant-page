export function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
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
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const title = document.createElement("h2");
        title.classList.add("menu-title");
        title.textContent = item.name;

        const description = document.createElement("p");
        description.classList.add("menu-description");
        description.textContent = item.description;

        menuItem.append(title, description);
        content.appendChild(menuItem);
    }
    )
}