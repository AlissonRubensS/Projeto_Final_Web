import { pool } from "../config/db.js";
import { randomInt } from "node:crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()


// função de login
export async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const response = await pool.query("SELECT * FROM Users");

    if (response.rowCount == 0) {
      throw new Error("Nenhum Usuário encontrado");
    }

    const user = response.rows.find(
      (user) =>
        email.trim() == user.email && bcrypt.compareSync(password.trim(), user.password)
    );

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: error.message });
  }
}

export async function VerifyAuth(req, res) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token não fornecido" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json(decoded);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: error.message });
  }
}

export async function updatePassword(req, res) {
  try {
    const { id } = req.params;
    const { password } = req.body;

    if (!user_id || !pass) {
      throw new Error("Faltando dados");
    }

    // Fazendo Hash da senha
    const randowSalt = randomInt(10, 16);
    const hashingPass = await hash(password.trim(), randowSalt);

    // Criando a conta com esse Hash
    const response = await pool.query(
      `UPDATE Users SET password = $1 WHERE id = $2 RETURNING *`,
      [hashingPass, id]
    );

    const token = jwt.sign(response.rows[0], process.env.JWT_SECRET, {
      expiresIn: "12h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: error.message });
  }
}
