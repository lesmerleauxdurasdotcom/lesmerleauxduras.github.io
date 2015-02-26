
angular.module ('LesMerleauxApp', []).
    controller ('RatesController', function ($scope) {
        var now = Date.now(),
            calcFx = function (v,r) {
                return r === 1 ? v : Math.ceil((v*r)/10)*10;
            }

            ;
        $scope.Rates = __rates__;
        $scope.Currency = "GBP";
        $scope.Currencies = [{name: "GBP", fx: 1}]; //,{name: "EUR", fx: 1.36}, {name: "USD", fx: 1.55}];
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

    })
    .controller('ReviewsController', function ($scope) {

        $scope.Reviews = [
            {
                reviewer: 'Gina Hockley',
                summary: 'Wonderful relaxed holiday in a gorgeous spot. Beautiful character filled country house with everything you could need!',
                date: new Date(2014, 8-1, 1),
                rating: 5,
                source: {
                    name: 'Trip Advisor',
                    link: 'http://www.tripadvisor.co.uk/ShowUserReviews-g1079319-d7617055-r250940647-Les_Merleaux-Duras_Lot_et_Garonne_Aquitaine.html#review_250940647">Read the full review on Trip Advisor'
                }
            }

        ];


    }
);

