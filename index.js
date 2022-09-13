const sqlite3 = require("sqlite3")
const dbname = "univers.db";
let db = new sqlite3.Database(dbname, (err)=>{
    if (err) throw err;
    console.log ("base de donnée initialsé dans le fichier : " 
    + dbname);
});


db.run ('CREATE TABLE IF NOT EXISTS planetes (name varchar(25))');
 
db.run ('INSERT INTO planetes (name) values(?)', ["Mars"]);
db.run ('INSERT INTO planetes (name) values(?)', ["Terre"]);
db.run ('INSERT INTO planetes (name) values(?)', ["Pluton"]);
db.run ('INSERT INTO planetes (name) values(?)', ["jupiter"]);
db.run ('INSERT INTO planetes (name) values(?)', ["Mercure"]); 

db.all ("SELECT * FROM planetes", (err, data) =>{
    if (err) throw err;
    console.log(data)
});
