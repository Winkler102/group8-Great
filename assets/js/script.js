// We Are awesome 
let genreEl = document.querySelector('#genre')
let zipRequestEl = document.querySelector('#zipRequest');
let zipSubmitEl = document.querySelector('#zipSubmit');
let zipFormEl = document.querySelector('#zipForm')
let searchHistory = [];

var genreSelector = function () {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0c90416c29040e056b30db72789fae5&with_genres=16&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}

var genreList = function () {
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f0c90416c29040e056b30db72789fae5&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}

let fetchResturant = function (foodZip, foodType) {
  foodApiAddress = 'https://api.documenu.com/v2/restaurants/zip_code/' + foodZip + '?size=5&cuisine=' + foodType + '&key=983626163e2a685b3ade4ddc277fc658'
  fetch(foodApiAddress)
    .then(function (foodResponse) {
      foodResponse.json().then(function (foodData) {
        randomFood = randomNumGen();
        foodName = foodData.data[randomFood].restaurant_name;
        foodSite = foodData.data[randomFood].restaurant_website;
        createFoodLink()
      })
    })
};

let createFoodLink = function () {
  foodButton = document.createElement('a')
  foodButton.setAttribute('href', foodSite);
  foodButton.setAttribute('target', '_blank');
  foodButton.textContent = foodName;
}

let randomNumGen = function () {
  return Math.floor(Math.random() * 5);
};

let pullZip = function () {
  zipCode = zipRequestEl.value;
  console.log(zipCode);
};

let handleSelection = function () {
  console.log(genreEl.value);
};

genreEl.addEventListener('change', handleSelection)
zipFormEl.addEventListener('submit', pullZip)
fetchResturant('78728', 'american')
genreList()
genreSelector()
