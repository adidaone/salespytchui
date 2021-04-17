headermodule.directive('salespytchheader', function () {
	return {
		replace: true,
		restrict: 'E',
		template: function (element, attrs) {
			var htmlText = '<div class="container"><header class="row header-rm"><div class="col-md-5"><p class="logo"><a href="index.html">';
			htmlText += '<img src="images/logo.png" alt="Logo" /></a></p></div><div class="col-md-7"><form class="form-inline pull-right">';
			htmlText += '<input type="text" class="input-small" placeholder="Username"><input type="password" class="input-small" placeholder="Password">';
			htmlText += '<button type="submit" class="btn header-rm-btn1">LOGIN</button><a href="#/registration"><button type="button" class="btn header-rm-btn2">SIGN UP</button></a>';
			htmlText += '</form></div></header></div>';
			return htmlText;
		}
	}
});