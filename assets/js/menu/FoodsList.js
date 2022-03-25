import * as MenuManger from './MenuManger.js';
import * as Usermanager from '../auth/UserManager.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    const loggedIn = Object.keys(Usermanager.getLoggedInUser()).length;
    const contentTarget = document.querySelector("main");
    let lunchHTMLString;
    let drinkHTMLString;
    let appHTMLString;
    let dessertHTMLString;
    MenuManger.getFoods()
    .then(foodArray => {
        let lunchArray=[];
        let dessertArray = [];
        let drinkArray = [];
        let appArray = [];
        foodArray.map(food => {
            if(food.menuId === 1){
                lunchArray.push(food)
        } else if(food.menuId === 2){
            drinkArray.push(food)
        }else if(food.menuId === 3){
            appArray.push(food)
        }else if(food.menuId === 4){
            dessertArray.push(food)
        }
    })

        lunchHTMLString = `<h2>Lunch</h2>`
        lunchHTMLString += `<div class="row lunch">`
        lunchHTMLString += lunchArray.map(food => FoodCard(food, loggedIn)).join('')
        lunchHTMLString += `</div>`

        drinkHTMLString = `<h2>Drinks</h2>`
        drinkHTMLString += `<div class="row drink">`
        drinkHTMLString += drinkArray.map(food => FoodCard(food, loggedIn)).join('')
        drinkHTMLString += `</div>`

        appHTMLString = `<h2>Appetizers</h2>`
        appHTMLString += `<div class="row appetizer">`
        appHTMLString += appArray.map(food => FoodCard(food, loggedIn)).join('')
        appHTMLString += `</div>`

        dessertHTMLString = `<h2>Desserts</h2>`
        dessertHTMLString += `<div class="row dessert">`
        dessertHTMLString += dessertArray.map(food => FoodCard(food, loggedIn)).join('')
        dessertHTMLString += `</div>`

        contentTarget.innerHTML = lunchHTMLString + drinkHTMLString + appHTMLString + dessertHTMLString
    })
}
