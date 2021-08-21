document.getElementById('storage-256').addEventListener('click', function () {
    let remainCost1 = 0;

    const storage256Cost = document.getElementById('storage-cost');
    let totalStorageCost256 = storage256Cost.innerText;
    storage256Cost.innerText = parseInt(remainCost1);
    remainCost1 = totalStorageCost256;
    // updateStorage(0);
})
document.getElementById('storage-512').addEventListener('click', function () {
    let remainCost2 = 100;

    const storage512Cost = document.getElementById('storage-cost');
    let totalStorageCost512 = storage512Cost.innerText;
    storage512Cost.innerText = parseInt(remainCost2);
    remainCost2 = totalStorageCost512;
    // updateStorage(100);



})
document.getElementById('storage-1TB').addEventListener('click', function () {
    thirdValue = 180;
    const thirdStorageCost = document.getElementById('storage-cost');
    const totalThirdValue = thirdStorageCost.innerText;
    thirdStorageCost.innerText = parseInt(thirdValue);
    thirdValue = thirdStorageCost.innerText;
})