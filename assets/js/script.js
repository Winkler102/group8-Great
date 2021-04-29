<<<<<<< HEAD
=======
// We Are awesome
>>>>>>> d75481f8c2b9426f751f23f6205de45b297e4247
var genreSelector = function () {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0c90416c29040e056b30db72789fae5&with_genres=16&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}
genreSelector()

var genreList = function () {
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f0c90416c29040e056b30db72789fae5&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}
<<<<<<< HEAD
genreList()
=======

genreList()

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

>>>>>>> d75481f8c2b9426f751f23f6205de45b297e4247
