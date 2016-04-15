var inventoryData = require('../data-sample/inventory');
var warehouse = require('./warehouse');

function findItem(sku) {
    var i = inventoryData.map(item => item.sku).indexOf(sku);
    if (i === -1) {
        console.log("Item - %j not found", sku);
        return null;
    } else {
        return inventoryData[i];
    }
}

function isInStock(sku, qty) {
    var item = findItem(sku);
    return item && item.qty >= qty;
}

function order(sku, quantity, complete) {
    complete = complete || function () {};
    if (isInStock(sku, quantity)) {
        console.log("ordering %j of item # %j", quantity, sku);
        warehouse.packageAndShip(sku, quantity, function (tracking) {
            console.log("order shipped, tracking - %j", tracking);
            complete(tracking);
        });
        return true;
    } else {
        console.log("There are not %j of item '%j' in stock", quantity, sku);
        return false;
    }
}

module.exports.orderItem = order;