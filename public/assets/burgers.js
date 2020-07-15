$(function () {
    $(".updateBtn").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        if (devoured === 0) {
            devoured = 1;
        }
        // else {
        //     devoured = 0;
        // }

        // var data = {
        //     devoured,
        //     id,
        // };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured },
            // data: data,
        }).then(function () {
            console.log("Devoured!");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
