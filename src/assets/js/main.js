(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(function() {
        const $window = $(window);
        const $container = $('.sticky-top .container');
        const $navbarNav = $container.find('.navbar-nav');
        const $navbarBrand = $container.find('.navbar-brand');
        const $topbar = $('.topbar');
    
        function handleScroll() {
            if ($window.width() > 992) {
                const scrollTop = $window.scrollTop();
                if (scrollTop > 45) {
                    $topbar.addClass('d-lg-none');
                    $container.addClass('bg-white shadow-sm').css('max-width', '100%');
                    $navbarNav.addClass('ms-auto').removeClass('mx-auto');
                    $navbarBrand.addClass('d-block').removeClass('d-none');
                } else {
                    $topbar.removeClass('d-lg-none');
                    $container.removeClass('bg-white shadow-sm').css('max-width', '80%');
                    $navbarNav.removeClass('ms-auto').addClass('mx-auto');
                    $navbarBrand.removeClass('d-block').addClass('d-none');
                }
            } else {
                $container.addClass('shadow-sm').css('max-width', '100%');
            }
        }
    
        // Initial call to set up the right state
        handleScroll();
    
        // Attach scroll event handler
        $window.scroll(handleScroll);
    });
    




})(jQuery);

