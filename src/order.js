function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order)
  }
// return deliveryOrders
}

function refundOrder(orderNumber, deliveryOrders) {
  console.log(deliveryOrders)
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  console.log(deliveryOrders)
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}