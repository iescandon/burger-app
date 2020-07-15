var orm = require("../config/orm.js");

var burgers = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (cols, vals, col, val, cb) {
        orm.updateOne("burgers", cols, vals, col, val, function (res) {
            cb(res);
        });
    },
};

module.exports = burgers;
