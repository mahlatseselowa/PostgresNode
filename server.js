// const express = require("express");
// const connection = require("./connection"); //Database connection.
// const bodyParser = require("body-parser"); //Handles conversion from and to JSON.
// const router = require("express").Router();
// const cors = require("cors");

// //Instance of express that creates a server that listens for requests.
// const app = express(); 

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));

const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const bodyParser = require("body-parser");
const router = require("express").Router();
const connection = require("./connection")
const app = express();



//Parser requests of content-type application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended: true}));


const port = 5657;

//App is now listening on port 8080.
app.listen(process.env.PORT || port, ()=> {
    console.log(`Server up and running on port ${port}`);
});

//Connecting to postgres database
connection.connect(function(err) {
    if(err){
        throw err;
    }
    console.log("Successfully connected to the database.");
});

app.use("/api/users", router);

router.get("/all", (req, res) => {
    connection.query("SELECT * FROM users", (err, result) => {
        if(!err)
        {
            res.send(result.rows);
        }
    });
    connection.end;
});

router.get("/one/:id", (req, res) => {
    id = req.params.id;
    sqlQuery = `SELECT * FROM users WHERE id=${id}`;

    connection.query(sqlQuery, (err, result) => {
        if(!err)
        {
            res.send(result.rows);
        }
    });
    connection.end;
});

router.post("/create", (req, res) => {
    const id = req.body.id;
    const name = req.body.firstname;
    const surname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    console.log(name);
    
    const text = 'INSERT INTO users(firstname, lastname, email, phone) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [name, surname, email, phone]
    connection.query(text, values, (err, result) => {
        if(!err)
        {
            res.send("Successfully added user details.");
            console.log(name);
        }
        else
        {
            console.log(err.message);
        }
    });
    connection.end;
});
// router.post("/create", (req, res) => 
// {  
//     const text = 'INSERT INTO "users"(firstName, lastName, email, phone) VALUES($1, $2, $3, $4) RETURNING *'
//     const values = ['brianc', 'ghhjjnknkl','brian.m.carlson@gmail.com', '10111']
//     // callback
//     connection.query(text, values, (err, res) => {
//       if (err) {
//         console.log(err.stack)
//       } else {
//         console.log(res.rows[0])
//         // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//       }
//  })})


router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.firstname;
    console.log(name);
    //const sqlQ = ""

    connection.query(sql, (err, result) => {
        if(!err)
        {
            res.send("Successfully updated user details.");
        }
        else
        {
            console.log(err.message);
        }
    });
})