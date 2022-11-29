const express = require("express")
const app = express();
app.use(express.json())


var mysql = require('mysql');
var cors = require('cors');

app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "matrimony"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/validate', (req, res) => {
    let matrimony = req.body.matrimony;
    let password = req.body.password;
    let sql = "SELECT * from tblusers where txtEmail='" + matrimony + "' and txtPassword='" + password + "' ;";
    con.query(sql, (err, result) => {
        if (err) console.log("error");
        res.send(result);
    })
})

app.post('/insert', (req, res) => {
    let option = req.body.option;
    let name = req.body.name;
    //let mobile=req.body.mobile;
    let sql = "insert into tblusers (txtProfileFor, txtUserName) values ('" + option + "','" + name + "' );";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/selectdeno', (req, res) => {
    let sql = "SELECT txtReligion, id FROM tblreligion ;";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/displaydivfromdeno', (req, res) => {
    let id = req.body.id;
    let sql = "SELECT txtCaste, id FROM tblcaste where refReligion = '" + id + "';";
    console.log(sql);
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/selectmt', (req, res) => {
    let sql = "select txtmothertongue, id from tblmothertongue;";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/updateregister', (req, res) => {
    let id = req.body.id;
    let dob = req.body.dob;
    let deno = req.body.deno;
    let div = req.body.div;
    let caste = req.body.caste;
    let mt = req.body.mt;
    let email = req.body.email;
    let password = req.body.password;
    let sql = "update tblusers set dtDOB = '" + dob + "', refReligion = '" + deno + "', txtDiv = '" + div + "', refCaste = " + caste + ", refMotherTongue = " + mt + ", txtEmail = '" + email + "', txtPassword = '" + password + "' where id ='" + id + "' ";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/update', (req, res) => {
    let update = req.body.update;
    let from = req.body.from;
    let sql = "update tblusers set txtHeight = '" + update + "' where txtHeight = '" + from + "';";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/fetch', (req, res) => {
    let username = req.body.username;
    let sql = "SELECT * FROM tblusers where txtUserName='" + username + "';";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/fetchbyid', (req, res) => {
    let id = req.body.id;
    let sql = "select * from tblusers where id=" + id + ";";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/fetchandmakeprofile', (req, res) => {
    let id = req.body.id;
    let sql = "select tblusers.id, tblusers.txtUserName, tbleducation.txtEducation, tblstate.txtStatename, tblreligion.txtReligion , tblcaste.txtCaste from tblusers join tblcaste on tblusers.refCaste = tblcaste.id join tbleducation on tblusers.refEducation = tbleducation.id join tblstate on tblusers.refState = tblstate.id join tblprofession on tblusers.refProfession = tblprofession.id join tblreligion";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.post('/fetchandcopyprofile', (req, res) => {
    let id = req.body.id;
    let sql = "select tblusers.id, tblusers.txtUserName, tbleducation.txtEducation, tblstate.txtStatename, tblreligion.txtReligion , tblcaste.txtCaste from tblusers join tblcaste on tblusers.refCaste = tblcaste.id join tbleducation on tblusers.refEducation = tbleducation.id join tblstate on tblusers.refState = tblstate.id join tblprofession on tblusers.refProfession = tblprofession.id join tblreligion on tblusers.refReligion = tblreligion.id where tblusers.id = '"+id+"';";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.listen(4000, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Success")
})

