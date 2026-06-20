document.addEventListener("DOMContentLoaded", function () {
    const textView = document.getElementById("text-view");
    const textEdit = document.getElementById("text-edit");

    document.addEventListener("keydown", function (event) {
        if ((event.ctrlKey || event.metaKey) && event.code === "KeyE") {
            event.preventDefault();
            if (!textView.classList.contains("hidden")) {
                textEdit.value = textView.textContent;
                textView.classList.add("hidden");
                textEdit.classList.remove("hidden");
                textEdit.focus();
            }
        }

        if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
            event.preventDefault();
            if (!textEdit.classList.contains("hidden")) {
                textView.textContent = textEdit.value;
                textEdit.classList.add("hidden");
                textView.classList.remove("hidden");
            }
        }
    });
});
