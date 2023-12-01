
export const createHtml = (recipes) => {
    const searchResults = document.getElementById("searchResults")
    searchResults.innerHTML = "";

    recipes.forEach((recipe) => {
        {
            const movieContainer = document.createElement("div")
            const title = document.createElement("h3")

            title.innerHTML = recipe.title
            movieContainer.appendChild(title);
            searchResults.appendChild(movieContainer);
        }
    })
};
