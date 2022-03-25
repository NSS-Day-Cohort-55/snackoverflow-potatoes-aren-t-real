const apiURL = "http://localhost:8088";

export const getOrders = () => {
    return fetch(`${apiURL}/orders`)
    .then(response => response.json())
}

export const getOrderFoods = () => {
    return fetch(`${apiURL}/orderFoods`)
    .then(response => response.json())
}

export const postOrder = (orderObj) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderObj)
    }
  
    return fetch(`http://localhost:8088/orders`, fetchOptions);
  }

  export const postOrderFood = (orderFoodObj) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderFoodObj)
    }
  
    return fetch(`http://localhost:8088/orderFoods`, fetchOptions);
  }

export const deleteOrder = (orderObj) => {
    const fetchOptions = {
        method: "DELETE",
    }

    return fetch(`http://localhost:8088/orders/${orderObj.id}`, fetchOptions)
}

export const deleteOrderFood = (orderFoodObj) => {
    const fetchOptions = {
        method: "DELETE",
    }

    return fetch(`http://localhost:8088/orderFoods/${orderFoodObj.id}`, fetchOptions)
}