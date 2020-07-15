var connection = require("../config/connection.js");
const { values } = require("mysql2/lib/constants/charset_encodings");

var orm = {
    selectAll: function (table, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, column, value, cb) {
        const query = "INSERT INTO ?? (??) VALUES (?) ";
        connection.query(query, [table, column, value], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, column, value, col, val, cb) {
        const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(query, [table, column, value, col, val], function (
            err,
            result
        ) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
};

module.exports = orm;
