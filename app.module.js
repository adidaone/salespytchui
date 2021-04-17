var salespytchapp = angular.module('salespytchapp', [
    'ngRoute',
   
    'header.module',
    'footer.module',
    'api-services.module',
    'registration.module',
    'opportunities.module'
]);
salespytchapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/landingpage', {
        templateUrl: 'src/anonymoususer/landingpage.html',
    }).
    when('/opportunities', {
        templateUrl: 'src/common/opportunities/opportunities.html',
        controller: 'opportunitiescontroller'
        //templateUrl: 'src/PageNotFound.html',
    }).
    when('/companyviewmore', {
        templateUrl: 'src/anonymoususer/companyviewmore.html',
    }).
    when('/salesagentviewmore', {
        templateUrl: 'src/anonymoususer/salesagentviewmore.html',
    }).
    when('/pricing', {
        templateUrl: 'src/anonymoususer/pricing.html',
    }).
    when('/ourstory', {
        templateUrl: 'src/anonymoususer/ourstory.html',
    }).
    when('/referacompany', {
        templateUrl: 'src/PageNotFound.html',
    }).
    when('/registration', {
        templateUrl: 'src/anonymoususer/registration/registration.html',
        controller: 'registrationcontroller'
    }).
    otherwise({
        redirectTo: '/landingpage'
    });

}]);