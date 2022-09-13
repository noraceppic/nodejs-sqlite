const sqlite3 = require("sqlite3")
const dbname = "univers.db";
let db = new sqlite3.Database(dbname, (err)=>{
    if (err) throw err;
    console.log ("base de donnée initialsé dans le fichier : " 
    + dbname);
});


//db.run ('CREATE TABLE IF NOT EXISTS planetes (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(25), size VARCHAR(255) ,created_at DATETIME DEFAULT CURRENT_TIMSTAMP NOT NULL)');
 
db.run ('INSERT INTO planetes (name,size) values(?,?)', ["Mars", "33445352"]);
db.run ('INSERT INTO planetes (name,size) values(?,?)', ["Terre", "25351542"]);
db.run ('INSERT INTO planetes (name,size) values(?,?)', ["Pluton", "2152545"]);
db.run ('INSERT INTO planetes (name,size) values(?,?)', ["jupiter", "2125"]);
db.run ('INSERT INTO planetes (name,size) values(?,?)', ["Mercure", "25526125"]);  

//db.run (`DELETE FROM planetes  WHERE rowid = 2`);

db.all ("SELECT rowid, * FROM planetes", (err, data) =>{
    if (err) throw err;
    console.log(data)
});
