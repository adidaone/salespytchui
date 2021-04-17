var opportunitiesmodule = angular.module('opportunities.module', ['angularUtils.directives.dirPagination']);

opportunitiesmodule.controller('opportunitiescontroller',
    ['$scope', 'apiService', function ($scope, apiServices) {
        $scope.opportunities = {
            opportunitiesActual: [],
            opportunities: [],
            totalOpportunitues: 0,
            pageSizeOptions: [],
            filterByCategoryOptions: [],
            pageSize: "",
            filterByCategory: "",
        };
        //Oppurtunity Modal Scope Items
        $scope.opportunity = null;
      

        apiServices.getOpportunities().then(
            function (data) {
                $scope.opportunities.opportunities = data;
                $scope.opportunities.opportunitiesActual = data;
                $scope.opportunities.totalOpportunitues = data.length;
                $scope.opportunities.pageSizeOptions.push({ DisplayText: '5 results', Value: '5' });
                $scope.opportunities.pageSizeOptions.push({ DisplayText: '10 results', Value: '10' });
                $scope.opportunities.pageSizeOptions.push({ DisplayText: '20 results', Value: '20' });
                $scope.opportunities.pageSize = $scope.opportunities.pageSizeOptions[0].Value;
                $scope.opportunities.opportunities.forEach(function (item) {
                    if ($scope.opportunities.filterByCategoryOptions.indexOf(item.ProductCategory) < 0)
                        $scope.opportunities.filterByCategoryOptions.push({ Category: item.ProductCategory, Value: item.ProductCategory })
                });
                $scope.opportunities.filterByCategory = "";
            });
       
        $scope.opportunities.filterByCategories = function () {
            $scope.opportunities.opportunities = [];
            if ($scope.opportunities.filterByCategory == null || $scope.opportunities.filterByCategory == "")
            {
                $scope.opportunities.opportunities = $scope.opportunities.opportunitiesActual;
            }
            else
            {
                $scope.opportunities.opportunitiesActual.forEach(function (item) {
                    if (item.ProductCategory == $scope.opportunities.filterByCategory)
                        $scope.opportunities.opportunities.push(item);
                });
            }
        };

        $scope.opportunities.viewOpportunity = function (opportunity) {
            $scope.opportunity = opportunity;
            $("#opportunityModal").modal();
        };

        $scope.opportunities.agentRequestForOpportunity = function (opportunity) {
            $scope.opportunity = opportunity;
            $("#agentRequestForOpportunity").modal();
        };
    }]);