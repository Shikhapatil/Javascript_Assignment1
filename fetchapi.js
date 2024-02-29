document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function renderData(data) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;
        tableBody.appendChild(row);
    });
}
