
angular.module ('LesMerleauxApp', []).
    controller ('RatesController', function ($scope) {
        var now = Date.now();
        $scope.Rates = __rates__;
        $scope.Currency = "GBP";
        $scope.Currencies = ["GBP"];
        $scope.OnCurrencyChange = function (c) {
            $scope.Currency = c;
        }
        $scope.InDate = function (v, i) {
            return v.end > now || ! angular.isDefined(v.start);
        }
    }
);

