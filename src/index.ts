import express from "express";
import multer from "multer";
import searchController from "./app/controllers/search-controller";

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/search", upload.single("file"), searchController);

app.listen(3000, () => {
  console.log("It is running: http://localhost:3000");
});
