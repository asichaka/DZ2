document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("book-list");
    const items = Array.from(list.querySelectorAll("li"));
    let lastSelectedIndex = -1;

    list.addEventListener("click", function (event) {
        const clickedItem = event.target;
        if (clickedItem.tagName !== "LI") return;

        const currentIndex = items.indexOf(clickedItem);

        if (event.ctrlKey || event.metaKey) {
            clickedItem.classList.toggle("selected");
            if (clickedItem.classList.contains("selected")) {
                lastSelectedIndex = currentIndex;
            } else if (lastSelectedIndex === currentIndex) {
                lastSelectedIndex = -1;
            }
        } else if (event.shiftKey && lastSelectedIndex !== -1) {
            const start = Math.min(lastSelectedIndex, currentIndex);
            const end = Math.max(lastSelectedIndex, currentIndex);

            for (let i = start; i <= end; i++) {
                items[i].classList.add("selected");
            }
        } else {
            const isSelected = clickedItem.classList.contains("selected");

            items.forEach(item => item.classList.remove("selected"));

            if (!isSelected) {
                clickedItem.classList.add("selected");
                lastSelectedIndex = currentIndex;
            } else {
                lastSelectedIndex = -1;
            }
        }
    });

    list.addEventListener("mousedown", function (event) {
        if (event.shiftKey) {
            event.preventDefault();
        }
    });
});



