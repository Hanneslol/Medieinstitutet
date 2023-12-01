import './style.css'

import { Movies } from './Movies'
import { searchRecipes } from './recipeService'
import { createHtml } from './createHtml'


let myMovies = []


fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8093d85c&s=jurassic")
  .then((response) => response.json())
  .then((mymovie) => {



    // mymovie.Search.map((m) => {
    //   myMovies.push(new Movies(m.Title, m.Poster))


    myMovies = mymovie.Search.map((m) => {
      return new Movies(m.Title, m.Poster)
      // console.log(myMovies);
    })


    for (let i = 0; i < myMovies.length; i++) {
      // const movie = mymovie[i];
      console.log(myMovies[i].title)
      const movieContainer = document.getElementById("movieContainer")
      const movieEach = document.createElement("div")
      movieEach.setAttribute("id", "movieEach");



      const movieTitle = document.createElement("h3")
      const moviePoster = document.createElement("img")
      movieEach.appendChild(movieTitle)
      movieEach.appendChild(moviePoster)
      movieContainer.appendChild(movieEach)

      movieTitle.innerHTML = myMovies[i].title
      moviePoster.src = myMovies[i].poster


    }
  }
  )


fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=cb9d8e0bc3a24cb2a55afed1c47395b3&includeNutrition=true")
  .then((response) => response.json())
  .then((wow) => {
    console.log(wow)
  })


//   GET https://api.spoonacular.com/recipes/complexSearch

// query
// fetch("https://api.spoonacular.com/recipes/complexSearch/?apiKey=cb9d8e0bc3a24cb2a55afed1c47395b3&query=cheese")
//   .then((response) => response.json())
//   .then((wow2) => {
//     console.log(wow2)
//   })

// const response = await fetch("https://api.spoonacular.com/recipes/complexSearch/?apiKey=cb9d8e0bc3a24cb2a55afed1c47395b3&query=cheese")
// const data = await response.json();


// console.log(data)



document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const recipesToSearchFor = document.getElementById("searchText").value;

  const recipes = await searchRecipes(recipesToSearchFor);
  createHtml(recipes);
});


