var apiservicesmodule = angular.module('api-services.module', ['angular-loading-bar'])
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
      cfpLoadingBarProvider.spinnerTemplate = '<div id="loader"></div>';
  }]);
apiservicesmodule.service("apiService", function ($http, $q, cfpLoadingBar) {
    return ({
        getOpportunities: getOpportunities
    });
    function getOpportunities()
    {
        cfpLoadingBar.start();
        var request = $http({
            method: "get",
            url: "data/amazon.json",
        });
        return (request.then(handleSuccess, handleError));
    }

    function handleSuccess(response) {        
        return (response.data);
        cfpLoadingBar.complete();
    }

    // I transform the error response, unwrapping the application dta from
    // the API response payload.
    function handleError(response) {
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        cfpLoadingBar.complete();
        if (
            !angular.isObject(response.data) ||
            !response.data.message
            ) {
            return ($q.reject("An unknown error occurred."));
        }
        // Otherwise, use expected error message.
        return ($q.reject(response.data.message));
         cfpLoadingBar.complete();
    }
});