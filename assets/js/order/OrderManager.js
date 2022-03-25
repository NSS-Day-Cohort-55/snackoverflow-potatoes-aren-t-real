const apiURL = "http://localhost:8088";

export const getOrders = () => {
    return fetch(`${apiURL}/orders`)
    .then(response => response.json())
}

export const getOrderFoods = () => {
    return fetch(`${apiURL}/orderFoods`)
    .then(response => response.json())
}