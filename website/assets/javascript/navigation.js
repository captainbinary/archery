$(document).ready(function () {
    /*-----------------*/
    /*   SCREEN SIZE   */
    /*-----------------*/
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    mediaQuery.addEventListener("change", handleDeviceChange);
    handleDeviceChange(mediaQuery);

    

    /*----------------*/
    /*   NAVIGATION   */
    /*----------------*/
    let show = 0;
    $('#nav_btn').click(function () {

        if ($('.navbar a').eq(1).css('display') == 'block') {
            console.log("Hiding Menu - advanced");
            hideMenu();
        } else {
            console.log("Showing Menu - advanced");
            showMenu();
        }
    });
});



 /*---------------*/
 /*   FUNCTIONS   */
 /*---------------*/

/*   SCREEN SIZE   */
function handleDeviceChange(e) {
    if (e.matches) {
        console.log("Mobile");
    }
    else {
        console.log("Bigger than mobile");
        clearNavCSS();
    }
}

/*   NAVIGATION   */
function showMenu() {
    $('.navbar a').show();
}

function hideMenu() {
    $('.navbar a').hide();
    $('#nav_btn').show();
}

function clearNavCSS() {
    $('.navbar a').removeAttr('style');
    $('#nav_btn').removeAttr('style');
}

