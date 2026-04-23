'use strict';

$(function () {

    /* ANIMATE LOGO, ICONS & FOOTER */

    $('.img-logo, #social-icons .icon, #site-footer').each(function (index) {
        var $el = $(this);
        setTimeout(function () { $el.addClass('animate'); }, 150 * index);
    });

    /* MODAL */

    var $modal = $('#modal');

    function openShirt(index) {
        var num = index + 1;
        $('#shirt-modal').html('<img src="../assets/img/shirts/' + num + '.png" alt="Tee No. ' + (num < 10 ? '0' + num : num) + '" />');
        $('#text-modal .shirt-title').text('Tee No. ' + (num < 10 ? '0' + num : num));
        $modal.addClass('open');
    }

    function closeModal() {
        $modal.removeClass('open');
    }

    $('.shirt').on('click', function () {
        openShirt($('.shirt').index(this));
    });

    $('.close-modal-button, #modal-overlay').on('click', closeModal);

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

});
