import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// const openAi = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E !");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const openAiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = openAiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    res.status(500).send(err?.response.data.error.message);
  }
});

export default router;
