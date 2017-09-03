(function() { 
    
    angular
        .module('mainApp', ['ngRoute'])
        .config(mainConfig);

    function mainConfig($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when("/", {
                templateUrl : "templates/gg-home.html"
            })
            .when("/view", {
                template : "<gg-generate></gg-generate>"
            })
            .when("/edit", {
                template : "<gg-generate></gg-generate>"
            })
            .otherwise({ redirectTo: '/' });
    }
}());