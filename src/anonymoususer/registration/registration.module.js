var registrationmodule = angular.module('registration.module', [])
.constant("registrationconstants", {
    businessOwner: "Business Owner",
    salesPerson: "Sales Person",
    message_SuccessClass: "container-fluid alert alert-success",
    message_ErrorClass: "container-fluid alert alert-danger"
});

registrationmodule.controller('registrationcontroller', ['$scope', 'registrationconstants', function ($scope, registrationconstants) {
    $scope.const_BusinessOwner = registrationconstants.businessOwner;
    $scope.const_SalesPerson = registrationconstants.salesPerson;
    $scope.displayMessage = {
        show: false,
        className: registrationconstants.message_SuccessClass,
        displayTexts: []
    };

    $scope.registration = {
        userType: $scope.const_BusinessOwner,
        userName: "",
        password: "",
        confirmPassword: "",
        email: "",
        mobileNumber: ""
    };

    $scope.registration.save = function () {
        $scope.refreshDisplayMessage(false,'',[]);
        var displayTexts = [];
        if ($scope.registration.userName.length == 0)
            displayTexts.push('UserName is required');
        if ($scope.registration.password.length == 0)
            displayTexts.push('Password is required');
        if ($scope.registration.confirmPassword.length == 0)
            displayTexts.push('Confirm Password is required');
        if ($scope.registration.email.length == 0)
            displayTexts.push('Email is required');
        if ($scope.registration.mobileNumber.length == 0)
            displayTexts.push('Mobile Number is required');
        console.log(displayTexts);
        if (displayTexts.length > 0) {
            $scope.refreshDisplayMessage(true, registrationconstants.message_ErrorClass, displayTexts);
        }
    };

    $scope.refreshDisplayMessage = function (show, className, displayTexts) {
        $scope.displayMessage.show = show;
        $scope.displayMessage.className = className;
        $scope.displayMessage.displayTexts = displayTexts;
        console.log($scope.displayMessage.displayTexts);
    };
}]);