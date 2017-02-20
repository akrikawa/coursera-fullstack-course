(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController ($scope,
                                $injector) {
  $scope.message = "";
  $scope.customStyle = {};
  $scope.checkLunch = function() {
    if (!$scope.lunch) {
      $scope.message = "Please enter data first";
      $scope.customStyle.colorClass = "red";
      $scope.customStyle.borderColorClass = "red-brdr";
    }
    else {
      var items = $scope.lunch.split(',');
      var itemCount = calculateItems(items);
      $scope.customStyle.colorClass = "green";
      $scope.customStyle.borderColorClass = "green-brdr";
      // to do check for blanks
      if (itemCount > 3) {
        $scope.message = "Too Much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    }
  };
  function calculateItems(items) {
    var totalItems = 0;
    for (var i = 0; i < items.length; i++) {
      var item = items[i].trim();
      if(item) {
        totalItems++;
      }
    }
    //console.log(totalItems);
    return totalItems;
    }
  }
})();
