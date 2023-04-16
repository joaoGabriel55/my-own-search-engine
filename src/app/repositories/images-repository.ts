import dbInstance from "../../db";

const ImageRepository = () => ({
  findMeme: async (imageBase64: string) => {
    const responseImage = await dbInstance.graphql
      .get()
      .withClassName("Meme")
      .withFields("image")
      .withNearImage({ image: imageBase64 })
      .withLimit(1)
      .do();

    const result = responseImage.data.Get.Meme[0].image;

    return result;
  },
});

export default ImageRepository;
