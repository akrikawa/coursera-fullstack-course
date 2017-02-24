(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController ($scope,
                                $injector) {
  $scope.message = "";
  $scope.customStyle = {};
  // Check the lunch input field value
  $scope.checkLunch = function() {
    // Check if the field is empty
    if (!$scope.lunch) {
      // The field is empty so change message and
      // make the text red and the border red
      $scope.message = "Please enter data first";
      $scope.customStyle.colorClass = "red";
      $scope.customStyle.borderColorClass = "red-brdr";
    }
    else {
      // The field is not empty so get the input
      // value into an array so we can iterate over the
      // item values entered
      var items = $scope.lunch.split(',');
      // Send the items array to the calculateItems() function
      var itemCount = calculateItems(items);
      // Change the message text to green and change
      // the input box border to green
      $scope.customStyle.colorClass = "green";
      $scope.customStyle.borderColorClass = "green-brdr";
      // Evaluate how many items we have and change
      // the message accordingly
      if (itemCount > 3) {
        $scope.message = "Too Much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    }
  };

  // Function counts how many itmes are in the array;
  // it excludes spaces from the count
  function calculateItems(items) {
    var totalItems = 0;
    for (var i = 0; i < items.length; i++) {
      var item = items[i].trim();
      if(item) {
        totalItems++;
      }
    }
    // DEBUG:
    // console.log(totalItems);
    return totalItems;
    }
  }
})();
