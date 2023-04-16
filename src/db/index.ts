import weaviate from "weaviate-ts-client";

const dbInstance = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

export default dbInstance;
