$(window).on("load", function () {
    console.log("Page Loaded - Starting First Run Procedure");

    $.post("assets/API/gallery.php", { page: 1, size: 1 })
        .done(function (data) {
            console.log("Data Loaded: " + data);
        });
});