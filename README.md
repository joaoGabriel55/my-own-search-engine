# My own search engine

## Setup

Start the AI Native Vector Database
````
docker compose up -d
````

Run migration and seed
````
npm run migrate & npm run seed
````

## Endpoints

`POST /search`

Example using Postman:

![image](https://user-images.githubusercontent.com/23138717/232352516-e83f24da-5895-41b6-9e10-1e3f47a94379.png)

Example curl:

```
curl --location 'http://localhost:3000/search' \
--header 'Content-Type: multipart/form-data' \
--form 'file=@"PATH/FILENAME"'
```
