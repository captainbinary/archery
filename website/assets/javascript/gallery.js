let page_size;
$(window).on("load", function () {
    console.log("MESSAGE: First Run");
    let page = 1;

    // Calculate Size variable based on screen size
    if (isMobile) {
        size = 1;
    } else {
        size = 4;
    }

    $.post("assets/API/gallery.php", { page: page, size: size },
        function (data) {
            callResult(data);
        }, "json");
});



/*---------------*/
/*   FUNCTIONS   */
/*---------------*/

/* something */
function callResult(data) {
    console.log("FUNCTION CALL: callResult");
    console.log("DATA: " + JSON.stringify(data));

    // do data validation / error handling
    let pass = true;
    let error = "";

    if (data.status != "success") {
        pass = false;
    }
    console.log("MESSAGE: Checking API Result status: " + data.status);


    if (pass) {
        // Clear old data and handlers
        clearOld();

        // Create new pictures
        createPictures(data.output.pictures);

        // Create Pagination
        createPagination(data.output.total_pages);

        // Create interactive handlers
        createLinks();
    } else {
        alert("Error, data did not pass validation.");
    }
}

function clearOld() {
    console.log("FUNCTION CALL: clearOld");

    console.log("MESSAGE: Clearing HTML");
    $('#gallery .images').html('<img src="assets/images/loading2.gif" alt="loading" />');
    $('#pagination').html('');

    console.log("MESSAGE: Clearing Handlers");
    $('#gallery .images').off("gallery");
    $('#pagination').off("pagination");
}

function createPictures(pictures) {
    console.log("FUNCTION CALL: createPictures");

    let html = "";
    $.each(pictures, function (k, v) {
        html += '<img src="assets/gallery/thumbnail.php?file=' + v + '" data-fullscreen="' + v + '" alt="' + v + '" />';
    });
    $('#gallery .images').html(html);
}

function createPagination(total) {
    console.log("FUNCTION CALL: createPagination");

    let html = "";
    for (let i = 1; i <= total; i++) {
        html += '<a href="' + i + '" class="p_link_number">' + i + '</a>';
    }
    $('#pagination').html(html);
}

function createLinks() {
    console.log("FUNCTION CALL: createLinks");

    // Gallery images
    $('#gallery .images').on("click.gallery", "img", function (e) {
        this.requestFullscreen();
    });

    // Pagination
    $('#pagination').on("click.pagination", "a", function (e) {
        e.preventDefault;

        let page = $(this).html();
        if (isMobile) {
            size = 1;
        } else {
            size = 4;
        }

        $.post("assets/API/gallery.php", { page: page, size: size },
            function (data) {
                callResult(data);
            }, "json");

        return false;
    });
}