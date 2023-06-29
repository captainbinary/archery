$(document).ready(function () {
    /*----------------*/
    /*   NAVIGATION   */
    /*----------------*/
    let show = 0;

    $('#nav_btn').click(function () {
        if (show === 0) {
            show = 1;
            console.log("Showing Menu");
            Show();
        } else {
            show = 0;
            console.log("Hiding Menu");
            Hide();
        }
    });
});


function Show() {
    $('.navbar a').css('display', 'block');
}

function Hide() {
    $('.navbar a').css('display', 'none');
    $('#nav_btn').css('display', 'block');
}