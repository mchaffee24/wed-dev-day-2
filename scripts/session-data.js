document.addEventListener("DOMContentLoaded", function () {
    const lastSearchText = document.getElementById("last-search");
    const clearBtn = document.getElementById("clear-session");

    const lastSearch = sessionStorage.getItem("lastSearch");

    if (lastSearch) {
        lastSearchText.textContent = lastSearch;
    }

    clearBtn.addEventListener("click", function () {
        sessionStorage.clear();
        lastSearchText.textContent = "No search saved yet.";
    });
});