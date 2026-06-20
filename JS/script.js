document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#link-list a");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
            link.classList.add("external-link");
        }
    });
});





