import express from "express";
import cors from "cors";

import UsersRoutes from "./Routes/users.routes.js";
import ItensRoutes from "./Routes/itens.routes.js";
import AuthRoutes from "./Routes/auth.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://projeto-final-web-uy9e.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    // permite tools como Insomnia/Postman (origin undefined)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/users", UsersRoutes);
app.use("/itens", ItensRoutes);
app.use("/auth", AuthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
