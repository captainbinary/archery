let page_size;
$(window).on("load", function () {
    console.log("MESSAGE: First Run Procedure");
    let page_number = 1;

    // Calculate Size variable based on screen size
    console.log("SIZECHECK: isMobile status: " + isMobile);
    if (isMobile) {
        // User on a mobile
        page_size = 1;
    } else {
        // User on a desktop
        page_size = 3;
    }
    console.log("SIZECHECK: page_size: " + page_size);



    $.post("assets/API/gallery.php", { page: page_number, size: page_size }, function (data) {
        callResult(data);
    }, "json");
});



/*---------------*/
/*   FUNCTIONS   */
/*---------------*/

/* something */
function callResult(data) {
    console.log("DATA - JSON: " + data);
    console.log("MESSAGE: Checking API Result status: " + data.status);



    // do data validation / error handling



    clearHTML();
    constructPictures(data);
    constructLinks(data.output.total_pages);
}

function setupClicks() {
    $('#pagination').on("click.pagination", "a", function (event) {
        event.preventDefault;

        console.log("TESTING " + this);
        

        let page_number = $(this).html();



        console.log("Click event. Contains : " + page_number);

        if (isMobile) {
            // User on a mobile
            page_size = 1;
        } else {
            // User on a desktop
            page_size = 3;
        }

        $.post("assets/API/gallery.php", { page: page_number, size: page_size }, function (data) {
            callResult(data);
        }, "json");
        return false;
    });
}

function removeClicks() {
    $('#pagination').off(".pagination");

}

function clearHTML() {
    console.log("MESSAGE: Clearing Event Handlers");
    // Remove events from pagination and images
    removeClicks();

    console.log("MESSAGE: Clearing HTML");
    $('#gallery .images').html('<img src="assets/images/loading2.gif" alt="loading" />');
    $('#pagination').html('');
}

function constructPictures(data) {
    console.log("MESSAGE: Constructing Picture HTML with ajax data.");
    const pictures = data.output.pictures;
    console.log(pictures);
    let html = "";
    $.each(pictures, function (k, v) {
        html += '<img class="click" src="assets/gallery/thumbnail.php?file=' + v + '" alt="' + v +'" />';
    });

    $('#gallery .images').html(html);
}

function constructLinks(total_pages) {
    console.log("MESSAGE: Constructing Pagination Links");
    let html = '<a href="prev" data-direction="Prev" class="p_link_img prev">prev</a>';
    for (let i = 1; i <= total_pages; i++) {
        html += '<a href="' + i + '" class="p_link_number">' + i + '</a>';
    }
    html += '<a href="next" data-direction="Next" class="p_link_img next">next</a>';

    $('#pagination').html(html);

    // add click events to pagination
    setupClicks();
}