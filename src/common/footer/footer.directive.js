footermodule.directive('salespytchfooter', function () {
    return {
        replace: true,
        restrict: 'E',
        template: function (element, attrs) {
            var htmlText = '<div class="container-fluid footer-2"><div class="container"><div class="row footer-2-rm"><div class="col-md-5">';
            htmlText += '<p class="logo"><a href="index.html"><img src="images/logo.png" alt="Logo" /></a></p></div><div class="col-md-7">';
            htmlText += '<p class="copy-rm pull-right">&copy; ALL RIGHTS RESERVED TO SALESPYTCH</p></div></div></div></div>';           
            return htmlText;
        }
    }
});