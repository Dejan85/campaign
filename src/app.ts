import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/index";

// process.on("uncaughtException", (err) => {
//   console.log("test", err.message);
// });

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`server is up on port ${process.env.PORT} `);
});
