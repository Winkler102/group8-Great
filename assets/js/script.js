// We Are awesome
let genreEl = document.querySelector('#genre')
let zipRequestEl = document.querySelector('#zipRequest')
let zipSubmitEl = document.querySelector('#zipSubmit')
let zipFormEl = document.querySelector('#zipForm')
let searchHistory = [];
let cuisinelist = ['Sandwiches', 'American', 'Bar Food', 'Italian', 'Mexican', 'Pizza', 'Dali Food', 'Japanese']

function get (x) {
  return document.getElementById (x);
}



const genreSelector = function (genre) {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0c90416c29040e056b30db72789fae5&with_genres=' + genre + '&language=en-US')

    .then(response => response.json())

    .then(data => console.log(data))
}

// Fetch request for a list of all genres - use to find the numbers mapping to the genre. Returns an Object
let genreList = function () {
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f0c90416c29040e056b30db72789fae5&language=en-US')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data.forEach((item, i) => {
      var newItem = document.createElement('li')
      get ('genre').appendChild(newItem)
    })
    )
}

let fetchResturant = function (foodZip, foodType) {
  foodApiAddress = 'https://api.documenu.com/v2/restaurants/zip_code/' + foodZip + '?size=5&cuisine=' + foodType + '&key=983626163e2a685b3ade4ddc277fc658'
  fetch(foodApiAddress)
    .then(function (foodResponse) {
      if (foodResponse.ok) {
        foodResponse.json().then(function (foodData) {
          if (foodData.data[0]) {
            randomFood = randomNumGen(foodData.data.length);
            foodName = foodData.data[randomFood].restaurant_name;
            foodSite = foodData.data[randomFood].restaurant_website;
            createFoodLink()
          }
          else {
            console.log('No results')
          }
        })
      } else {
        alert(foodResponse.statusText)
      }
    })
};

let createFoodLink = function () {
  foodButton = document.createElement('a')
  foodButton.setAttribute('href', foodSite);
  foodButton.setAttribute('target', '_blank');
  foodButton.textContent = foodName;
}

let randomNumGen = function (max) {
  return Math.floor(Math.random() * max);
};


let pullZip = function () {
  event.preventDefault();
  zipCode = zipRequestEl.value;
  zipRequestEl.value = "";
};

let saveHistory = function () {
  historyString = JSON.stringify(searchHistory)
  localStorage.setItem('history', historyString)
}

let loadHistory = function () {
  let searchHistory = JSON.parse(localStorage.getItem('history'));
  if (searchHistory) {
    return
  }
  searchHistory = [];
}

let handleSelection = function () {
  genreSelector(genreEl.value);
  randomCusine = randomNumGen(cuisinelist.length);
  fetchResturant(zipCode, cuisinelist[randomCusine])
  let addSave = { genreType: genreEl.value, cusineType: cuisinelist[randomCusine] };
  searchHistory.push(addSave);
  saveHistory();
};

genreEl.addEventListener('change', handleSelection)
zipFormEl.addEventListener('submit', pullZip)
genreList()

loadHistory();
