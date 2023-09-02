import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoute from "./routes/postRoute.js";
import dalleRoute from "./routes/dalleRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoute);
app.use("/api/v1/dalle", dalleRoute);
// app.use((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "Content-Type",
//     "Authorization"
//   );
// });

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E ! 😄");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started on http://localhost:8080/");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
