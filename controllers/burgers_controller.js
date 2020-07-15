var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.burger], function (result) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update([req.body.devoured], [req.params.id], function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});

module.exports = router;
