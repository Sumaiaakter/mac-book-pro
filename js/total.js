// // total price
// function updateProductCost(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + '-cost');
//     let productCost = productInput.innerText;
//     // const deliveryCost = document.getElementById('delivery-charge');
//     // const totalDeliveryCost = deliveryCost.innerText;
//     if (isIncreasing == true) {
//         deliveryCost.innerText = parseInt(freeDelivery);
//         freeDelivery = productCost;;

//     }
//     else {
//         deliveryCost.innerText = parseInt(chargedDelivery);
//         chargedDelivery = productCost;;
//     }
//     productInput.innerText = productCost;

//     // update total

//     const productTotal = document.getElementById(product + '-total');
//     productTotal.innerText = productCost + price;
// }

// function getInputValue() {
//     const productInput = document.getElementById('memory-cost');
//     const productCost = parseInt(productInput.innerText);
//     return productCost;
// }

// function calculateTotal() {

//     const total = getInputValue() + 1219
// }

// // increase cost
// document.getElementById('memory-input').addEventListener('click', function () {
//     updateProductCost('memory', 1219, true);
// });
// document.getElementById('memory-input2').addEventListener('click', function () {
//     updateProductCost('memory', 1219, true);
// })












function getInputValue() {
    const productInput = document.getElementById(product + '-cost');
    const productCost = parseInt(productInput.innerText);
    return productCost;
}

function calculateTotal() {
    const memoryCost = getInputValue() + 1219;
    const storageCost = getInputValue() + 1219;
    const deliveryCost = getInputValue() + 1219;
}
document.getElementById('memory-cost').addEventListener('click', function () {
    updateProductCost('memory', 180, true);
})