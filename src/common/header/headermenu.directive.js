headermodule.directive('salespytchheadermenu', function () {
    return {
        replace: true,
        restrict: 'E',
        template: function (element, attrs) {
            var htmlText = '<div class="container-fluid main-menu"><div class="container main-menu-769"><nav class="row"><div class="col-md-12">';
            htmlText += '<ul class="menu-list-rm"><li><a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a></li>';
            htmlText += '<li><a href="#/opportunities">OPPORTUNITIES</a></li><li><a href="#/companyviewmore">COMPANIES</a></li>';
            htmlText += '<li><a href="#/salesagentviewmore">SALES AGENTS</a></li><li><a href="#/pricing">PRICING</a></li>';
            htmlText += '<li><a href="#/ourstory">OUR STORY</a></li><li><a href="javascript: void(0);">TESTIMONIALS</a></li>';
            htmlText += '<li><a href="#/referacompany">REFER A COMPANY</a></li><li><input class="menu-ser" type="search" placeholder="Search"></li>';
            htmlText += '<li class="menu-bar"><i class="fa fa-bars" aria-hidden="true"></i><ul class="sub-menu-rm none"><li> <a href="#/opportunities">OPPORTUNITIES</a></li>';
            htmlText += '<li> <a href="#/companyviewmore">COMPANIES</a></li><li> <a href="#/salesagentviewmore">SALES AGENTS</a></li><li> <a href="#/pricing">PRICING</a></li>';
            htmlText += '<li> <a href="#/ourstory">OUR STORY</a></li><li> <a href="#">TESTIMONIALS</a></li><li> <a href="#/referacompany">REFER A COMPANY</a></li></ul>';
            htmlText += '</li></ul></div></nav></div>';
            htmlText += '<div class="container main-menu-768"><nav class="row"><div class="col-md-12 res-men_relative"><div class="res-men">';
            htmlText += '<input class="menu-ser" type="search" placeholder="Search"><p class="menu-bar"><i class="fa fa-bars" aria-hidden="true"></i></p></div>';
            htmlText += '<ul class="menu-res-rm"><li><a href="#">HOME</a></li><li><a href="#/opportunities">OPPORTUNITIES</a></li>';
            htmlText += '<li><a href="#/companyviewmore">COMPANIES</a></li><li><a href="#/salesagentviewmore">SALES AGENTS</a></li><li><a href="#/pricing">PRICING</a></li>';
            htmlText += '<li><a href="#/ourstory">OUR STORY</a></li><li><a href="javascript: void(0);">TESTIMONIALS</a></li><li><a href="#/referacompany">REFER A COMPANY</a></li></ul></div></nav></div></div>';
            return htmlText;
        }
    }
});