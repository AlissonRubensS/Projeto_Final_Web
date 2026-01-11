import express from "express";
import cors from "cors";

import UsersRoutes from "./Routes/users.routes.js";
import ItensRoutes from "./Routes/itens.routes.js";
import AuthRoutes from "./Routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", UsersRoutes);
app.use("/itens", ItensRoutes);
app.use("/auth", AuthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
