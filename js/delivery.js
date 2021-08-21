function updateCost(isIncreasing) {
    let freeDelivery = 0;
    let chargedDelivery = 20;
    const deliveryCost = document.getElementById('delivery-charge');
    const totalDeliveryCost = deliveryCost.innerText;
    if (isIncreasing == true) {
        deliveryCost.innerText = parseInt(chargedDelivery);
        chargedDelivery = totalDeliveryCost;


    }
    else {
        deliveryCost.innerText = parseInt(freeDelivery);
        freeDelivery = totalDeliveryCost;

    }

}

document.getElementById('free-delivery').addEventListener('click', function () {
    updateCost(false);

})
document.getElementById('chrged-delivery').addEventListener('click', function () {
    updateCost(true);

})

// update delivery cost

document.getElementById('free-delivery').addEventListener('click', function () {
    let previousCost = 0;
    const memoryCost = document.getElementById('delivery-cost');
    const totalMemoryCost = memoryCost.innerText;
    memoryCost.innerText = parseInt(previousCost);
    previousCost = totalMemoryCost;

});

// function apply

document.getElementById('charged-delivery').addEventListener('click', function () {
    let previousCost1 = 20;
    const memoryCost = document.getElementById('delivery-cost');
    const totalMemoryCost = memoryCost.innerText;
    memoryCost.innerText = parseInt(previousCost1);
    previousCost1 = totalMemoryCost;
    return previousCost1;






});
document.getElementById('charged-delivery').addEventListener('click', function () {
    let totalCost = 1219;
    let previousCost1 = 20;
    document.getElementById('total-price').innerText = parseInt(totalCost) + parseInt(previousCost1);

});