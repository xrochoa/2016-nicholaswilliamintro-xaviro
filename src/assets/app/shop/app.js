'use strict';

window.onload = function() {

    /* ANIMATE LOGO, ICONS & FOOTER */

    $(".img-logo, #social-icons .icon, #site-footer").each(function(index) {

        $(this).addClass("animate");

    });

    /* MODAL */

    $('.shirt').on('click', function() {

        //open modal
        $('#modal').addClass('open');

        //change image
        var index = $('.shirt').index(this);
        //console.log(index);
        $("#shirt-modal").html('<img src="../assets/img/shirts/' + (index + 1) + '.png">');

    });

    //close modal
    $('.close-modal-button, #modal-overlay').on('click', function() {
        $('#modal').removeClass('open');
    });



};
