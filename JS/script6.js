document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("resizable-box");
    const handle = document.getElementById("resize-handle");

    handle.addEventListener("mousedown", function (event) {
        event.preventDefault();

        const startWidth = box.offsetWidth;
        const startHeight = box.offsetHeight;
        const startX = event.clientX;
        const startY = event.clientY;

        function doDrag(dragEvent) {
            box.style.width = (startWidth + dragEvent.clientX - startX) + "px";
            box.style.height = (startHeight + dragEvent.clientY - startY) + "px";
        }

        function stopDrag() {
            document.removeEventListener("mousemove", doDrag);
            document.removeEventListener("mouseup", stopDrag);
        }

        document.addEventListener("mousemove", doDrag);
        document.addEventListener("mouseup", stopDrag);
    });
});

