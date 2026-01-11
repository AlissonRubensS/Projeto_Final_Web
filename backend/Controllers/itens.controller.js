import { pool } from "../config/db.js";

//CRUD
//CREATE
export const createItens = async (req, res) => {
  try {
    const {
      name,
      observations,
      url_photo,
      find_date,
      find_local,
      loss_date,
      loss_local,
      fk_Users_id,
    } = req.body;

    if (!name || !loss_date || !loss_local || !fk_Users_id) {
      throw new Error("Faltando dados");
    }

    await pool.query(
      `INSERT INT Itens(name, observations, url_photo, find_date, find_local, loss_date, loss_local, fk_Users_id,)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8);`,
      [
        name,
        observations,
        url_photo,
        find_date,
        find_local,
        loss_date,
        loss_local,
        fk_Users_id,
      ]
    );
    res.status(200).json({ message: "Item cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//READ
export const readItens = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM Itens;");

    if (response.rowCount == 0) {
      return res.status(201).json({ message: "Sem itens cadastrados" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//UPDATE
export const updateItens = async (req, ers) => {
  try {
    const { id } = req.params;
    const {
      name,
      observations,
      url_photo,
      find_date,
      find_local,
      loss_date,
      loss_local,
    } = req.body;

    if (!id || !name || !loss_date || loss_local) {
      throw new Error("Faltando dados");
    }

    const response = await pool.query(
      `
        UPDATE Itens SET
            name = COALESCE($1, name),
            observations = COALESCE($2, observations),
            url_photo = COALESCE($3, url_photo),
            find_date = COALESCE($4, find_date),
            find_local = COALESCE($5, find_local),
            loss_date = COALESCE($6, loss_date),
            loss_local = COALESCE($7, loss_local)
        WHERE id = $8`,
      [
        name,
        observations,
        url_photo,
        find_date,
        find_local,
        loss_date,
        loss_local,
        id,
      ]
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
export const deleteItens = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await pool.query(
      `DELETE FROM Itens WHERE id = $1 RETURNING *`,
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
