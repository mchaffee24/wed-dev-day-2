document.addEventListener("DOMContentLoaded", function () {
    const lastSearchText = document.getElementById("last-search");
    const sessionJson = document.getElementById("session-json");
    const clearBtn = document.getElementById("clear-session");

    const lastSearch = sessionStorage.getItem("lastSearch");

    if (lastSearch && lastSearch.trim() !== "") {
        lastSearchText.textContent = lastSearch;
    }

    showSessionJson();

    clearBtn.addEventListener("click", function () {
        sessionStorage.clear();
        lastSearchText.textContent = "No search saved yet.";
        showSessionJson();
        alert("Session data cleared.");
    });

    function showSessionJson() {
        const data = {};

        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            data[key] = sessionStorage.getItem(key);
        }

        sessionJson.textContent = JSON.stringify(data, null, 2);
    }
});