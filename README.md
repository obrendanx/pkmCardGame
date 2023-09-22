<h1 align="center">Welcome to pkmCardGame 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> This is a pokemon card collection site for users to track different collections of pokemon cards they have aquired throughout the different generations. The main focus of this project is file structure, focusing primarliy on using microservices to build this application with docker. Most importantly I have introduced E2E testing using cypress to ensure working functionality.

Future tasks is to implement a gitlab pipeline to run cypress tests automatically before building the app

###  [LiveDemo]()

## Install

```sh
docker-compose build
docker-compose up
```

## Usage


**To use this project:**
  1. Clone the repo

  1. If you have docker

      ```
      docker-compose build 
      docker-compose up
      ```
  1. If you are running using node

      **open 3 separate terminal windows**

      ```
      Terminal 1:
      cd backend/user-microservice
      npm install
      node userMicroservice.js

      Terminal 2:
      cd backend/auth-microservice
      npm install
      node authMicroservice.js

      Terminal 3:
      cd frontend
      npm install
      npm start
      ```

## Pages



## Author

👤 **Brendan Ewen**

* Website: https://bportfolio.net
* GitHub: [@obrendanx](https://gitlab.com/obrendanx)

