const express = require("express");
const client = require("../connection");

//Gets users.
// exports.getUsers =  (req, res)  => {
//     client.query("SELECT * FROM users", (err, result) => {
//         if(!err)
//         {
//             res.send(result.rows);
//         }
//     });
//     client.end;
// }

//Gets user by id.
// exports.findOne = (req, res) => {
//     id = req.params.id;
//     sqlQuery = `SELECT * FROM users WHERE id=${id}`;

//     client.query(sqlQuery, (err, result) => {
//         if(!err)
//         {
//             res.send(result.rows);
//         }
//     });
//     client.end;
// }