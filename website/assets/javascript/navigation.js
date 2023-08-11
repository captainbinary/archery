$(window).on("load", function () {
    /*----------------*/
    /*   NAVIGATION   */
    /*----------------*/
    let show = 0;
    $('#nav_btn').on("click", function () {

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

/*   NAVIGATION   */
function showMenu() {
    $('.navbar a').show();
}

function hideMenu() {
    $('.navbar a').hide();
    $('#nav_btn').show();
}



