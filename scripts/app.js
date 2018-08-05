angular.module('calculatorApp', [])
  .controller('mainCtrl', function($scope) {

    $scope.ops = ['+', '-', '*', '/'];
    $scope.first = "";
    $scope.second = "";
    $scope.operator = "";
    $scope.inputtoggle = true;
    $scope.showresult = false;

//function for passing the clicked operator to variable & toggling input visibility
    $scope.clickOp = function(op) {
      $scope.operator = op;
      $scope.inputtoggle = false;
    };

//calculate result, also add exception for dividing by zero
    $scope.getResult = function(operator) {
      switch ($scope.operator) {
        case '+':
          return $scope.first + $scope.second;
        case '-':
          return $scope.first - $scope.second;
        case '*':
          return $scope.first * $scope.second;
        case '/':
          if ($scope.second == 0) {
            return "cannot divide by zero!";
          } else {
            return $scope.first / $scope.second;
          }
      }
    };
  });
