'use strict';

$(function() {

    /* ANIMATE PATH*/

    $("path").each(function() {

        var path = this;
        //get length of path
        var length = path.getTotalLength();

        //starting positions
        $(this).css({
            "stroke-dasharray": length + ' ' + length,
            "stroke-dashoffset": length
        });

        setTimeout(function() {
            $(path).addClass("animate");
        }, 100);

    });

    /* ANIMATE ICONS */

    $("#social-icons .cell").each(function(index) {

        var $icon = $(this);

        setTimeout(function() {
            $icon.addClass("animate");
        }, 500 * index);

    });

    /* OVERLAY AND FOOTER*/

    $('#overlay, #site-footer').addClass("animate");

});