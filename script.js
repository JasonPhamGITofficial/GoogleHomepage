document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-button");
    const luckyBtn = document.getElementById("lucky-button");
    const searchInput = document.getElementById("search-input");

    searchBtn.addEventListener("click", () => {
        const searchQuery = searchInput.value.trim();
        searchQuery ? alert(`You searched for: ${searchQuery}`) : alert("Please enter a search query.");
    });
    luckyBtn.addEventListener("click", () => {
        alert("You're feeling lucky today!");
    });
})