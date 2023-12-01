import { get } from "./serviceBase"

export const searchRecipes = async (recipe) => {


    const url = (`https://api.spoonacular.com/recipes/complexSearch/?apiKey=cb9d8e0bc3a24cb2a55afed1c47395b3&query=${recipe}`)
    const data = await get(url)
    return data.results;
};

