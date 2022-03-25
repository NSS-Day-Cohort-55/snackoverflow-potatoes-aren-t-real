export const FoodCard = (foodObj, loggedIn) => {
    let HTMLString = ""
    HTMLString += ` <div class="col-sm-6 g-4">
    <div class="card">
    <div class="h-100">
    <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
    </div>
        <div class="card-body">
            <h5 class="card-title">${foodObj.name}</h5>
            <p class="card-text">${foodObj.description}</p>
            <p>Price: $${foodObj.price}</p>`
    if(foodObj.isVegetarian === true){
        HTMLString += `<image src="./assets/images/icon-veg.png" alt="vegetarian icon"></image>`
    }
    if(loggedIn !== 0){
    HTMLString += `
        <form action="/action_page.php">
        <label for="quantity">Quantity:</label>
        <input type="number" id="${foodObj.id}" name="quantity" min="1" max="100">
        </form>
        </br> 
        <button type="button" class="btn btn-order">Order Button</button>
        </div>
        </div>
        </div>
        `
        }
        else {
          HTMLString += `
          </div>
          </div>
          </div>`
        }
        
    return HTMLString
}
