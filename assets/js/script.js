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