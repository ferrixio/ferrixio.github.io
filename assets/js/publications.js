document.addEventListener("DOMContentLoaded", () => {
    loadBibliography();
});

async function loadBibliography() {
    const container = document.getElementById('bibliography');

    try {
        // Fetch the JSON file (ensure this is running on a local or live web server)
        const response = await fetch('./assets/json/publications.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const publications = await response.json();
        
        // Clear the "Loading..." text
        container.innerHTML = '';

        // Sort publications by year (newest first), then alphabetically by title
        publications.sort((a, b) => {
            // 1. Primary sort: decending years
            if (b.year !== a.year) {
                return b.year - a.year;
            }
            
            // 2. Secondary sort: ascending titles
            return a.title.localeCompare(b.title);
        });

        // Render each entry
        publications.forEach(entry => {
            const entryElement = formatCitation(entry);
            container.appendChild(entryElement);
        });

    } catch (error) {
        console.error("Could not load publications:", error);
        container.innerHTML = '<p>Error loading publications.</p>';
    }
}

function formatCitation(entry) {
    const div = document.createElement('div');

    // Format the entry
    if (entry.type === 'article') {
        div.innerHTML = `<p>
            ${entry.author}.<br><i>"${entry.title}"</i>.
            In: <b>${entry.journal}</b>, Volume ${entry.volume}, pp. ${entry.pages} (${entry.year}).
            ${entry.url ? `<a href="${entry.url}" target="_blank">${entry.doi}</a>` : ''}
        </p>`;
    } else if (entry.type === 'preprint') {
        div.innerHTML = `<p>
            ${entry.author}.<br><i>"${entry.title}"</i>.
            Arxiv preprint: ${entry.url ? `<a href="${entry.url}" target="_blank">${entry.doi}</a>` : ''} (${entry.year}).<br>
        </p>`;
        venue = `Arxiv preprint: <em>${entry.booktitle}</em>.`;
    }

    return div;
}