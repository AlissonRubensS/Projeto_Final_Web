import { pool } from "../config/db.js";
import bcrypt from "bcryptjs";

//CRUD
// CREATE
export const createUsers = async (req, res) => {
  try {
    const { name, access_type, email, password, phone_number, url_photo } =
      req.body;

    if (!name || !access_type || !email || !password) {
      throw new Error("Dados incorretos");
    }

    // Fazendo Hash da senha
    const hashingPass = await bcrypt.hash(password.trim(), 10);

    const response = await pool.query(
      `INSERT INTO USERS( name, access_type, email, password, phone_number, url_photo )
        VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, access_type, email, hashingPass, phone_number, url_photo]
    );

    res.status(200).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//READ
export const readUsers = async (req, res) => {
  try {
    const response = await pool.query(`SELECT * FROM USERS`);

    if (response.rowCount == 0) {
      throw new Error("Não foi encontrado usuáios cadastrados");
    }

    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//UPDATE
export const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, access_type, email, password, phone_number, url_photo } =
      req.body;

    if (!id || !name || !access_type || !email || !password) {
      throw new Error("Dados incorretos");
    }

    const response = await pool.query(
      `UPDATE USERS 
       SET 
         name = COALESCE($2, name), 
         access_type = COALESCE($2, access_type)
         email = COALESCE($3, email), 
         password = COALESCE($4, password), 
         phone_number = COALESCE($5, phone_number)
         url_photo = COALESCE($6, url_photo)
       WHERE id = $1 RETURNING *`,
      [id, name, access_type, email, password, phone_number, url_photo]
    );

    if (response.rowCount == 0) {
      throw new Error("Não foi encontrado nenhum usuário");
    }

    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//DELETE
export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Dados incorretos");
    }

    const response = await pool.query(
      `DELETE FROM USERS WHERE id = $1 RETURNING *`,
      [id]
    );

    if (response.rowCount == 0) {
      throw new Error("Não foi encontrado nenhum usuário");
    }

    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
