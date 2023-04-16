import dbInstance from ".";

const schemaConfig = {
  class: "Meme",
  vectorizer: "img2vec-neural",
  vectorIndexType: "hnsw", // Hierarchical Navigable Small Worlds
  moduleConfig: {
    "img2vec-neural": {
      imageFields: ["image"],
    },
  },
  properties: [
    { name: "image", dataType: ["blob"] },
    { name: "text", dataType: ["string"] },
  ],
};

const migrate = async () => {
  await dbInstance.schema.classCreator().withClass(schemaConfig).do();
};

migrate();
