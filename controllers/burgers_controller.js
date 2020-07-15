var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.burger], function (result) {
        res.redirect("/");
    });
});

router.put("/api/burgers", function (req, res) {
    burger.update(
        ["devoured"],
        [req.body.devoured],
        ["id"],
        [req.body.id],
        function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                // res.status(200).end();
                res.redirect("/");
            }
        }
    );
});

module.exports = router;
