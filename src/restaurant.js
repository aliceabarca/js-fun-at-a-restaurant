function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}
// COMING BACK
function addMenuItem(restaurant, typeOfPizza) { 
  if (!restaurant.menus[typeOfPizza.type].includes(typeOfPizza)) {
    restaurant.menus[typeOfPizza.type].push(typeOfPizza)
  }
}

function removeMenuItem(pizzaRestaurant, typeOfPizza, menuItem) {
  var index = pizzaRestaurant.menus[menuItem];
  for (var i = 0; i < index.length; i++) {
    if (index[i].name === typeOfPizza) {
      index.splice(i, 1);
      return `No one is eating our ${typeOfPizza} - it has been removed from the ${menuItem} menu!`
    } 
  }
  return `Sorry, we don't sell ${typeOfPizza}, try adding a new recipe!`
}

function checkForFood(restaurant, foodItem) {
   var index = restaurant.menus[foodItem.type];
   for (var i = 0; i < index.length; i++) {
     if (index[i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`
    } 
   }
  return `Sorry, we aren't serving ${foodItem.name} today.`
}
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}