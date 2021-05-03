// We Are awesome 
let genreEl = document.querySelector('#genre')
let zipRequestEl = document.querySelector('#zipRequest');
let zipSubmitEl = document.querySelector('#zipSubmit');
let zipFormEl = document.querySelector('#zipForm');
let searchHistoryEl = document.querySelector('#searchHistory');
let searchHistory = [];
let cuisinelist = ['Sandwiches', 'American', 'Bar Food', 'Italian', 'Mexican', 'Pizza', 'Dali Food', 'Japanese']

var genreSelector = function (genre) {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0c90416c29040e056b30db72789fae5&with_genres=' + genre + '&language=en-US')

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

let loadZip = function () {
  zipCode = JSON.parse(localStorage.getItem('zip'));
  if (zipCode) {
    return;
  }
  zipCode = '';
}

let pullZip = function () {
  event.preventDefault();
  zipCode = zipRequestEl.value;
  localStorage.setItem('zip', JSON.stringify(zipCode));
  zipRequestEl.value = "";

};

let saveHistory = function () {
  historyString = JSON.stringify(searchHistory)
  localStorage.setItem('history', historyString)
}

let loadHistory = function () {
  searchHistory = JSON.parse(localStorage.getItem('history'));
  if (searchHistory) {
    displayHistory();
    return;
  }
  searchHistory = [];
}

let displayHistory = function () {
  for (i = 0; i < searchHistory.length; i++) {
    historyButton = document.createElement('button');
    historyGenre = searchHistory[i].genreType;
    historyCusine = searchHistory[i].cusineType;
    historyButton.setAttribute('onclick', 'handleHistory()');
    historyButton.textContent = 'PastChoice';
    searchHistoryEl.appendChild(historyButton);
  }
};

let handleHistory = function () {
  genreSelector(historyGenre);
  fetchResturant(zipCode, historyCusine);
};

let handleSelection = function () {
  genreSelector(genreEl.value);
  randomCusine = randomNumGen(cuisinelist.length);
  fetchResturant(zipCode, cuisinelist[randomCusine])
  let addSave = { genreType: genreEl.value, cusineType: cuisinelist[randomCusine] };
  searchHistory.push(addSave);
  saveHistory();
};

genreEl.addEventListener('change', handleSelection);
zipFormEl.addEventListener('submit', pullZip);
// genreList();
loadHistory();
loadZip();
