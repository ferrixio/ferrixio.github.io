(function($) {

    var $window = $(window),
        $body = $('body'),
        panelInitialized = false; // Track if panel was already initialized

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        alignment: 'center',
        detach: false
    });

    // Function to handle navigation panel
    function handleNavPanel() {
        if ($(window).width() <= 736) { // Check if screen width is 768px or smaller
            if (!$('#titleBar').length) { // Prevent duplication
                $('<div id="titleBar">' +
                    '<a href="#navPanel" class="toggle"></a>' +
                    '<span class="title">' + $('#logo h1').html() + '</span>' +
                '</div>').appendTo($body);
            }

            if (!$('#navPanel').length) { // Prevent duplication
                let $navPanel = $('<div id="navPanel">' +
                    '<nav>' +
                        $('#nav').navList() +
                    '</nav>' +
                '</div>').appendTo($body);

                // Initialize panel before applying styles
                $navPanel.panel({
                    delay: 500,
                    hideOnClick: true,
                    hideOnSwipe: true,
                    resetScroll: true,
                    resetForms: true,
                    side: 'left',
                    target: $body,
                    visibleClass: 'navPanel-visible'
                });

                // Temporarily hide sidebar without animation
                if (!panelInitialized) {
                    $navPanel.css({ 'visibility': 'hidden' }); // Hide temporarily
                    setTimeout(() => { 
                        $navPanel.css({ 'visibility': 'visible' }); // Show it again
                    }, 50);
                    panelInitialized = true;
                }
            }
        } else {
            // Remove nav panel if screen size is above threshold
            $('#titleBar').remove();
            $('#navPanel').remove();
            panelInitialized = false; // Reset flag when removed
        }
    }

    // Run on page load
    handleNavPanel();   // BUG: a bit buggy but it works

    // Run on window resize
    $window.resize(handleNavPanel);

})(jQuery);
