import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "./db";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function register(
  name: string,
  email: string,
  password: string,
  role: string = "user"
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.execute(
    "INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)",
    [name, email, hashedPassword, role]
  );
}

export async function login(
  email: string,
  password: string,
  ip: string
) {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  const user = (rows as any[])[0];

  if (!user) {
    await logAttempt(email, ip, false);
    throw new Error("User not found");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    await logAttempt(email, ip, false);
    throw new Error("Wrong password");
  }

  await logAttempt(email, ip, true);

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: "15m" }
  );

  return token;
}

async function logAttempt(
  email: string,
  ip: string,
  success: boolean
) {
  await db.execute(
    "INSERT INTO login_attempts (email, ip_address, success) VALUES (?,?,?)",
    [email, ip, success]
  );
}