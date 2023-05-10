function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(topping, ingredients) {
  if (!ingredients.includes(topping)) {
  ingredients.push(topping)
  }
  return ingredients
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(menu) {
  menu *= .9
  return menu
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


