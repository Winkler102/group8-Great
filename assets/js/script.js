// We Are awesome
var genreSelector = function () {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0c90416c29040e056b30db72789fae5&with_genres=16&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}
genreSelector()

// Fetch request for a list of all genres - use to find the numbers mapping to the genre
var genreList = function () {
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f0c90416c29040e056b30db72789fae5&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}

genreList()

<<<<<<< HEAD
// A function to allow search by Movie title
var titleQuery = function () {
  fetch(' https://api.themoviedb.org/3/search/movie?api_key=f0c90416c29040e056b30db72789fae5&language=en-US&page=1&include_adult=false&query="King Kong"')

    .then(response => response.json())

    .then(data => console.log(data))
}
titleQuery()

// write a function that will take the text input from the search bar element by id and insert it into the search by movie title query
// first grab the text input element with a generic function
var elementGrabId = function get (x) {
  return document.getElementById(x)
}
// --goes here
// then take the output of that text input element function above and use it as the pass-through for query
=======
let fetchResturant = function (foodZip, foodType) {
    foodApiAddress = 'https://api.documenu.com/v2/restaurants/zip_code/' + foodZip + '?size=1&cuisine=' + foodType + '&key=983626163e2a685b3ade4ddc277fc658'
    fetch(foodApiAddress)
        .then(function (foodResponse) {
            foodResponse.json().then(function (foodData) {
                console.log(foodData);
            })
        })
}

fetchResturant('78728', 'american')

>>>>>>> f2af21c1f213e985dba33d4e44a3489ad84110c4
