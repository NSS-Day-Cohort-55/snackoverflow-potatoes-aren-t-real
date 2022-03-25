import * as OrderManager from "./OrderManager.js";
import * as UserManager from "../auth/UserManager.js";
import { OrderCard } from "./OrderCard.js";

export const OrderList = () => {
    const contentTarget = document.querySelector("main");
    const userObj = UserManager.getLoggedInUser();
    OrderManager.getOrdersByUser(userObj.id).then(orderArray => {
        let htmlString = `<h2>${userObj.Name}'s Orders</h2>`;
        htmlString += `<div class="row orderList">`;
        htmlString += orderArray.map(order => OrderCard(order)).join('');
        htmlString += `</div>`;
        contentTarget.innerHTML = htmlString;
    });
}