
angular.module ('LesMerleauxApp', []).
    controller ('RatesController', function ($scope) {
        var now = Date.now(),
            calcFx = function (v,r) {
                return r === 1 ? v : Math.ceil((v*r)/10)*10;
            }

            ;
        $scope.Rates = __rates__;
        $scope.Currency = "GBP";
        $scope.Currencies = [{name: "GBP", fx: 1},{name: "EUR", fx: 1.36}, {name: "USD", fx: 1.55}];
        $scope.OnCurrencyChange = function (c) {
            $scope.Currency = c;
        }
        $scope.InDate = function (v, i) {
            return v.end > now || ! angular.isDefined(v.start);
        }

        angular.forEach($scope.Currencies, function (c) {

            angular.forEach($scope.Rates, function (r) {

                if (r.rates.hasOwnProperty(c.name)) {
                    return;
                }

                var nr = angular.copy(r.rates["GBP"]);

                for (var p in nr) {
                    if (nr.hasOwnProperty(p)) {
                        nr[p] = calcFx(nr[p], c.fx);
                    }
                }

                r.rates[c.name] = angular.copy(nr);

            });


        })

    }
);

