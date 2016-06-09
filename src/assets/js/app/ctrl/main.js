angular.module('app').controller('mainCtrl', function($scope) {

	//FIX THIS SHIT USING JQLITE IN THE RIGHT WAY

    /* ANIMATE PATH*/

    angular.forEach(angular.element(document).find("path"), function(item) {

        var path = item;
        //get length of path
        var length = path.getTotalLength();

        //starting positions
        angular.element(path).css({
            "stroke-dasharray": length + ' ' + length,
            "stroke-dashoffset": length
        });

        setTimeout(function() {
            angular.element(path).addClass("animate");
        }, 100);

    });

    /* ANIMATE ICONS */

    angular.forEach(angular.element(document).find("a"), function(item, index) {

        var a = item;

        setTimeout(function() {
            angular.element(a).addClass("animate");
        }, 500 * index);

    });

    /* OVERLAY AND FOOTER*/

    angular.element(document).find('div').addClass("animate");
    angular.element(document).find('footer').addClass("animate");


})