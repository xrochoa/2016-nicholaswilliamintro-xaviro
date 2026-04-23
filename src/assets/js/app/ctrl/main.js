angular.module('app').controller('mainCtrl', function($scope, $timeout) {

    // Run after the route template has been inserted into the DOM.
    $timeout(function() {

        var doc = angular.element(document);

        /* Animate SVG logo paths by priming stroke-dasharray/offset, then
           adding the .animate class so CSS transitions can draw them in. */
        angular.forEach(doc.find('path'), function(path) {
            var length = path.getTotalLength();
            angular.element(path).css({
                'stroke-dasharray':  length + ' ' + length,
                'stroke-dashoffset': length
            });
            $timeout(function() {
                angular.element(path).addClass('animate');
            }, 100);
        });

        /* Stagger-in the social icons. */
        angular.forEach(doc.find('a'), function(a, index) {
            $timeout(function() {
                angular.element(a).addClass('animate');
            }, 500 * index);
        });

        /* Fade-in overlay and footer. */
        doc.find('div').addClass('animate');
        doc.find('footer').addClass('animate');

    });

});