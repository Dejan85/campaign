import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/index";
import cors from "cors";

// process.on("uncaughtException", (err) => {
//   console.log("test", err.message);
// });

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);

app.get("/test", (req, res) => {
  res.send("hello world from test route");
});

app.listen(process.env.PORT, () => {
  console.log(`server is up on port ${process.env.PORT} `);
});
