footermodule.directive('salespytchfootermenu', function () {
    return {
        replace: true,
        restrict: 'E',
        template: function (element, attrs) {
            var htmlText = '<div class="container-fluid footer-1"><div class="container"><div class="row"><div class="col-sm-6 col-md-2 footer-rm-md">';
            htmlText += '<h4>QUICK LINKS</h4><ul><li> <a href="opportunities.html">Opportunities</a></li><li> <a href="#">Our Agent Stats</a></li>';
            htmlText += '<li> <a href="#">For Companies</a></li><li> <a href="#">For Sales Agents</a></li><li> <a href="#">Testimonials</a></li>';
            htmlText += '<li> <a href="#">Blog</a></li><li> <a href="#">Log in</a></li></ul></div><div class="col-sm-6 col-md-2 footer-rm-md">';
            htmlText += '<h4>ABOUT SALES PYTCH</h4><ul><li> <a href="#">Refer a Company</a></li><li> <a href="OurStory.html">Our Story</a></li>';
            htmlText += '<li> <a href="#">FAQ</a></li><li> <a href="Pricing.html">Pricing</a></li><li> <a href="#">Press Kit</a></li>';
            htmlText += '<li> <a href="#">Brand Guidelines</a></li><li> <a href="#">Terms &amp; Conditions</a></li><li> <a href="#">Privacy Policy</a></li>';
            htmlText += '</ul></div><div class="col-sm-6 col-md-3 footer-rm-md"><h4>CONTACT US</h4><ul><li>SALES PYTCH emails</li>';
            htmlText += '<li>+44 131 618 2300 UK/Europe </li><li>+1 517 917 0062 North America</li></ul><div class="footer-socio"><p><img src="images/fb.png" alt="Facebook" /></p>';
            htmlText += '<p><img src="images/twi.png" alt="Twitter" /></p><p><img src="images/in.png" alt="Linkedin" /></p><p><img src="images/socio_go.png" alt="Google" /></p>';
            htmlText += '</div></div><div class="col-sm-6 col-md-5 footer-rm-md"><h4>WHERE TO FIND OUR OFFICE</h4>';
            htmlText += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.6089693117474!2d-84.01930255081766!3d33.85827383812132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5ba20cb386d05%3A0xa9f5442c81d2eef2!2sBoost+Mobile+-+Cellular+Express!5e0!3m2!1sen!2sin!4v1465498108946" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>';
            htmlText += '</div></div></div></div>';

            return htmlText;
        }
    }
});

