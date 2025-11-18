import express, { Request, Response } from "express";
import cors from "cors";
import route from "./routes/Routers";
const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use("/users", route);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
