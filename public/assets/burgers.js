$(function () {
    $(".updateBtn").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        if (devoured === 0) {
            devoured = 1;
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured },
        }).then(function () {
            console.log("Devoured!");
            location.reload();
        });
    });
});
