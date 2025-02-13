
// Piè di pagina
const copyright = `
    <div id="copyright">
        <ul>
            <li>&copy;Samuele Ferri</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
    </div>
`;

// Inseriamo il codice nel punto desiderato della pagina
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright-footer").innerHTML = copyright;
});
