const express = require("express");
const mysql = require("mysql")
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/registration', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('post : registration');
    console.log(email);
    console.log(password);

    con.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            if(result.length > 0) {
                console.log("User already exists");
            } else {
                con.query("INSERT INTO users (email, password, role) VALUES (?, ?, 'user')", [email, password],
                (result) => {
                    if(result) {
                        res.send(result);
                    } else {
                        res.send({mesage: "Enter correct registration details"})
                    }
                }
                )
            }
        }
    }
    )
});

app.get("/api", (req, res) => {
    return res.json({message: "This is from backend"});
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    con.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password],
    (err,result) => {
        if(err) {
            res.setEncoding({err: err});
        } else {
            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username or password"})
            }
        }
    }
    )
});


app.listen(5000, () => {
    console.log('app is running');
});

const con = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "metroevents",
    }
)
