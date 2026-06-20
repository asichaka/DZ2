document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("sortable-table");
    const headers = table.querySelectorAll("th");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    headers.forEach((header, index) => {
        let isAscending = true;

        header.addEventListener("click", function () {
            const sortedRows = rows.sort((rowA, rowB) => {
                const cellA = rowA.children[index].textContent.trim();
                const cellB = rowB.children[index].textContent.trim();

                const numA = Number(cellA);
                const numB = Number(cellB);

                if (!isNaN(numA) && !isNaN(numB)) {
                    return isAscending ? numA - numB : numB - numA;
                }

                return isAscending
                    ? cellA.localeCompare(cellB)
                    : cellB.localeCompare(cellA);
            });

            tbody.append(...sortedRows);
            isAscending = !isAscending;
        });
    });
});
