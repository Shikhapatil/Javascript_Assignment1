let debounceTimeout;

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", debounce(handleSearch, 300));
});

function debounce(func, delay) {
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

function handleSearch() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    if (searchTerm === "") {
        clearResults();
        return;
    }

    // Simulating a search with a mock data array
    const mockData = [
        "apple", "banana", "orange", "grape", "pear", "pineapple", "kiwi", "strawberry", "blueberry", "watermelon"
    ];

    const searchResults = mockData.filter(item => item.includes(searchTerm));

    displayResults(searchResults);
}

function displayResults(results) {
    const searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";

    results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        searchResultsElement.appendChild(listItem);
    });
}

function clearResults() {
    const searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";
}
