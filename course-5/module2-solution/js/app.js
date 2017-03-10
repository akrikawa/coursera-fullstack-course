(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', ['ngAnimate'])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemBuyer = this;
    itemBuyer.items = ShoppingListCheckOffService.getItems();
    itemBuyer.buyItem = function (itemIndex) {
       ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showBoughtItems = this;
    showBoughtItems.items = ShoppingListCheckOffService.getBoughtItems();
    showBoughtItems.itemName = "";
    showBoughtItems.itemQuantity = "";
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [
      {name: "cookies", quantity: 10},
      {name: "apples", quantity: 13},
      {name: "containers of yogurt", quantity: 4},
      {name: "bananas", quantity: 3},
      {name: "potatoes", quantity: 4},
      {name: "bags of chips", quantity: 3},
      {name: "bunches of lettuce", quantity: 4},
      {name: "loaves of bread", quantity: 2}
    ];
    //console.log(toBuyItems);
    var boughtItems = [];

    service.buyItem = function (itemIndex) {
      //console.log('Item index is: ' + itemIndex);
      // add the item to the boughtItems list
      boughtItems.push(toBuyItems[itemIndex]);
      // remove the item from the boughtItems list
      toBuyItems.splice(itemIndex,1);
    };

    service.getItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    }
  }

})();
