import { readFileSync, readdirSync } from "fs";
import dbInstance from ".";

const seedRunner = async () => {
  console.log("Adding images...");

  const imageFiles = readdirSync("./img");

  const promises = imageFiles
    .filter((imageName) => imageName !== ".keep")
    .map(async (imageName) => {
      console.log(imageName);

      const image = readFileSync(`./img/${imageName}`);
      const base64 = Buffer.from(image).toString("base64");

      await dbInstance.data
        .creator()
        .withClassName("Meme")
        .withProperties({
          image: base64,
          text: imageName.split(".")[0].split("_").join(" "),
        })
        .do();
    });

  await Promise.all(promises);

  console.log("Added images!");
};

seedRunner();
