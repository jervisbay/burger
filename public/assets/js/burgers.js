// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("submitted burger");

    var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: 0
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger");
            console.log(newBurger);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".devour-burger").on("click", function(event) {
    console.log("devour burger!");
    var id = $(this).data("id");

    var newDevourState = {
        devoured: true
    };


    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(function() {
        console.log("devoured burger" + id);
        location.reload();
    })
})

$(".undevour-burger").on("click", function(event) {
    console.log("undevour burger!");
    var id = $(this).data("id");

    var newDevourState = {
        devoured: false
    };


    $.ajax("/api/burgers/undevour/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(function() {
        console.log("undevoured burger" + id);
        location.reload();
    })
})