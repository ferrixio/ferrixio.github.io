document.addEventListener("DOMContentLoaded", () => {
    loadWarehouse();
});

async function loadWarehouse() {
    const container = document.getElementsByClassName('holder')[0];

    try {
        const response = await fetch('./assets/json/wareitems.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const witems = await response.json();
        container.innerHTML = '';

        witems.sort((a,b) => {
            return a.text.localeCompare(b.text);
        });

        witems.forEach(entry => {
            const entryElement = formatCard(entry);
            container.appendChild(entryElement);
        });

    } catch (error) {
        console.error("Could not load items:", error);
        container.innerHTML = '<p>Error loading wharehouse.</p>';
    }
}

function formatCard(entry) {
    const item = document.createElement('a');
    item.classList.add('witem');
    item.setAttribute('href', "Warehouse/"+entry.file+".html");
    item.innerHTML = `${entry.text}`;
    item.style.border = `2px solid rgba(${entry.R}, ${entry.G}, ${entry.B}, 0.6)`;
    item.style.backgroundColor = `rgba(${entry.R}, ${entry.G}, ${entry.B}, 0.2)`;

    item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.03)";
        item.style.boxShadow = `0 0 25px rgba(${entry.R}, ${entry.G}, ${entry.B}, 0.4)`;
    })
    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
        item.style.boxShadow = '';
    })

    return item;
}