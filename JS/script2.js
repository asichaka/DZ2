document.addEventListener("DOMContentLoaded", function () {
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", function (event) {
            const nestedList = this.nextElementSibling;
            if (nestedList && nestedList.tagName === "UL") {
                nestedList.classList.toggle("closed");
            }
            event.stopPropagation();
        });
    });
});
