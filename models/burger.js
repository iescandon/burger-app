var orm = require("../config/orm.js");

var burgers = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (cb) {
        orm.updateOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
};

module.exports = burgers;
