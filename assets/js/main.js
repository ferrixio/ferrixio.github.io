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

                // Temporarily disable animation for first load
                if (!panelInitialized) {
                    $navPanel.css({ 'transform': 'translateX(-100%)', 'transition': 'none' }); // Hide without animation
                    setTimeout(() => { 
                        $navPanel.css({ 'transition': '' }); // Re-enable animation after first render
                    }, 50);
                    panelInitialized = true; // Mark as initialized
                }

                // Initialize panel normally
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
            }
        } else {
            // Remove nav panel if screen size is above threshold
            $('#titleBar').remove();
            $('#navPanel').remove();
            panelInitialized = false; // Reset flag when removed
        }
    }

    // Run on page load
    handleNavPanel();

    // Run on window resize
    $window.resize(handleNavPanel);

})(jQuery);
