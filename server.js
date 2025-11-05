import express from "express";
import { createRequestHandler } from "@react-router/express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, "build", "server");
app.use(express.static(path.join(__dirname, "build", "client")));

app.all(
  "*",
  createRequestHandler({
    build: await import(`${buildPath}/index.js`),
  }),
);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));