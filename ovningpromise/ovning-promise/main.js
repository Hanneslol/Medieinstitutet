import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { Movies } from './Movies'
import { resolvePackageEntry } from 'vite'

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

         promise                  promise < response >
            |                             |
  const response = await fetch(...Movies.apply.)

const data = await response.json();



try {
}

catch (error) {
}



button.addEventListener("click"() =>
  {
    const r = await fetch("...")
  const data = await response.json();
  });

.env API_KEY = 123123
  .env.development  API_KEY = 123123


main.js dela upp i olika document: services, models, htmlCreator


movieService.js

create, read, update, delete, = CRUD



services: olika funktioner searchMovies
getMovieById

serviceBase.js


Presentation -> application -> data





















