import * as MenuManger from './MenuManger.js';
import * as Usermanager from '../auth/UserManager.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    //check if we are logged in through the returned object. 
    //If the object is empty (not logged in) keys length is 0, a falsey value.
    const loggedIn = Object.keys(Usermanager.getLoggedInUser()).length;
    const contentTarget = document.querySelector("main")
    let HTMLString;
    MenuManger.getFoods()
    .then(foodArray => {
        HTMLString = `<div class="row">`
        HTMLString += foodArray.map(food => FoodCard(food, loggedIn)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })
    
}
