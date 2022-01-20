const { Client } = require("pg"); //Helps to connedct to postgres database.

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Letsdoit!",
    database: "postgres"
});

module.exports = client;