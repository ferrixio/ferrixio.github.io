// Common body-header
const mainHeader = document.createElement("header");
mainHeader.innerHTML = `
    <nav>
        <!-- Mobile format -->
        <details>
            <summary>Research</summary>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/research.html">Research</a></li>
                <li><a href="/warehouse.html">Warehouse</a></li>
                <li><a href="/photoblog.html">Portfolio</a></li>
                <li><a href="/about.html">About me</a></li>
            </ul>
        </details>

        <!-- Desktop format -->
        <div id="nav">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/research.html">Research</a></li>
                <li><a href="/warehouse.html">Warehouse</a></li>
                <li><a href="/photoblog.html">Portfolio</a></li>
                <li><a href="/about.html">About me</a></li>
            </ul>
        </div>
    </nav>
`;

document.body.prepend(mainHeader);


// Common html-head
const sharedHead = `
    <meta name="author" content="Samuele Ferri">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="/assets/css/main.css"/>
    <link rel="icon" type="image/svg+xml" href="/assets/css/images/favicon.svg">
`;

document.head.insertAdjacentHTML('afterbegin',sharedHead);