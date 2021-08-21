// Memory Cost 


document.getElementById('memory-input').addEventListener('click', function () {
    let previousCost = 0;
    const memoryCost = document.getElementById('memory-cost');
    const totalMemoryCost = memoryCost.innerText;
    memoryCost.innerText = parseInt(previousCost);
    previousCost = totalMemoryCost;

});

// function apply

document.getElementById('memory-input2').addEventListener('click', function () {
    let previousCost1 = 180;
    const memoryCost = document.getElementById('memory-cost');
    const totalMemoryCost = memoryCost.innerText;
    memoryCost.innerText = parseInt(previousCost1);
    previousCost1 = totalMemoryCost;
    return previousCost1;






});
document.getElementById('memory-input2').addEventListener('click', function () {
    let totalCost = 1219;
    let previousCost1 = 180;
    document.getElementById('total-price').innerText = parseInt(totalCost) + parseInt(previousCost1);

});
// End memory cost


// bonus section
document.getElementById('apply').addEventListener('click', function () {
    let steven = 20000;
    let tax = .2;
    document.getElementById('offer').value = (steven) * (tax);


})























