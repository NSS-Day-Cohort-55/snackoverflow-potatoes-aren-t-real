export const OrderCard = (orderObj) => {

    return `
    <div class="col-sm-6 g-4">
        <div class="card">
            <div class="h-100">
                <div class="card-body">
                <h5 class="card-title">${orderObj.id}</h5>
                <p class="card-text">Ordered On ${new Date(orderObj.timestamp)}</p>
                <ul>
                ${orderObj.orderFoods.map(item => {
                    return `<li>
                            ${item.food.name} - ${item.food.price}
                            </li>`
                })}
                </ul>
                </div>
            </div>
        </div>
    </div>`
}