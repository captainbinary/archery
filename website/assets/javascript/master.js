let isMobile = false;

$(window).on("load", function () {
    /*-----------------*/
    /*   SCREEN SIZE   */
    /*-----------------*/
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    mediaQuery.addEventListener("change", handleDeviceChange);
    handleDeviceChange(mediaQuery);
});



/*---------------*/
/*   FUNCTIONS   */
/*---------------*/

/*   SCREEN SIZE   */
function handleDeviceChange(e) {
    if (e.matches) {
        console.log("MESSAGE: Mobile Screen Size");
        isMobile = true;
    }
    else {
        console.log("MESSAGE: Desktop Screen Size");
        isMobile = false;

        // Clear function for desktops
        d_NavCss();
    }
}

/*   CLEAR FUNCTIONS   */
function clear() {
    if (isMobile) {
        // Clear function for mobiles
    } else {
        // Clear function for desktops
        d_NavCss();
    }
}

// Desktops
function d_NavCss() {
    console.log("CLEAR: Clearing Nav CSS");
    $('.navbar a').removeAttr('style');
    $('#nav_btn').removeAttr('style');
}