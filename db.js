import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",           // vendos user e databazës tënde
  password: "",           // vendos password të MySQL
  database: "fashion_shop" // emri i databazës që krijove
});

db.connect((err) => {
  if (err) console.log("Database connection failed:", err);
  else console.log("Connected to MySQL database ✅");
});

export default db;