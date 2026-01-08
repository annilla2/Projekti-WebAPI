import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // zakonisht bosh në XAMPP
  database: "fashion_shop", // EMRI I PERBASHKET
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database ✅");
  }
});

export default db;