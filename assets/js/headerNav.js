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
