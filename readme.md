# CS3219 OTOT Task B

* **Name**: Tan Ting Yu
* **Matric. Number**: A0218235J
* **Repo Link**: [https://github.com/blaketingyu/OTOT-B](https://github.com/blaketingyu/OTOT-B)

# Task B1:

### Requirements

1. MongoDB,
2. `.env` file to store the database password
3. Docker for deployment
4. Postman

### Deployment
Build the image from the given `Dockerfile` and map the ports accordingly.

```bash
# Installing dependencies
yarn

# Building the docker images
docker build -t blaketingyu/otot-b1 .
docker run -dp <local port>:<exposed port> blaketingyu/otot-b1

# verify that it's running correctly 
docker ps -a
```

## Postman Collection for API Testing: 

[API REQUESTS](https://github.com/blaketingyu/OTOT-B/blob/main/DEPLOYMENT_QUERIES.postman_collection.json) </br>
[GLOBAL ENV VARIABLES](https://github.com/blaketingyu/OTOT-B/blob/main/global_env_postman.txt) </br>
Backend Deployment Site: https://otot-b-bwo66nc7ba-as.a.run.app


# Task B2:

[CI FILE LINK](https://github.com/blaketingyu/OTOT-B/blob/main/CI.yaml) </br>
[CD FILE LINK](https://github.com/blaketingyu/OTOT-B/blob/main/CD.yaml) </br>


# Task B3:
Frontend Deployment Site: https://otot-b-blake-blaketingyu.vercel.app/

