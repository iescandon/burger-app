var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, column, value) {
        const query = "INSERT INTO ?? (??) VALUES (?) ";
        connection.query(query, [table, column, value], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, column, value) {
        const query = "UPDATE ?? SET ?? = ?";
        connection.query(query, [table, column, value], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;
