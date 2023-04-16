import { Request, Response } from "express";
import { unlinkSync, writeFileSync } from "fs";
import ImageRepository from "../repositories/images-repository";

const searchController = async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).send({ message: "File is empty or invalid" });
    return;
  }

  const { buffer } = req.file;
  const imageBase64 = buffer.toString("base64");

  const result = await ImageRepository().findMeme(imageBase64);
  const filepath = '/tmp/result.jpg';

  writeFileSync(filepath, result, 'base64');

  res.sendFile(filepath, { headers: { 'Content-Type': 'image/*' } }, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      unlinkSync(filepath);
    }
  });
};

export default searchController;
