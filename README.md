# CS3219 OTOT Task E

* **Name**: Tan Ting Yu
* **Matric. Number**: A0218235J
* **Repo Link**: [https://github.com/blaketingyu/OTOT-E](https://github.com/blaketingyu/OTOT-E)

# Task E:

### Requirements

1. MongoDB (Local),
2. `.env` file to store the database password
3. Postman to test api endpoints
4. Redis for caching
5. FakerJS to generate large amount of data

```bash
# Installing dependencies
yarn

# Starting the application
yarn dev

```

# API Endpoints 
```bash
POST - /redistest/populateDB (Populate the database with data)
POST - /redistest/clearDB (Drop collection in database)
GET - /redistest/mongotime (Get the time required to retrieve all the data using Mongo)
GET - /redistest/redistime (Get the time required to retrieve all the data using Redis)
POST - /redistest/clearRedis (Clear the cache in Redis)
```
