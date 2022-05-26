 # NodeJs Backend Setup Boilerplate and Structure 
 
In this repository, I don't aim to provide an optimal solution as each project have its own necessity but to help anyone that is starting with a node js project and can't find any inspiration on how to start building the project to take this project as the starting point.
 
 Some of the good practices followed in this repository:
 - Async/Await support 
 - WinstonJs Logger Implementation
 - Error Handling
 - Sequelize Support 
 - Basic Joi Validation
 - Open Api Specification implemented through swagger-jsdocs and swagger-ui
 - Jwt implementation 
 - Enviroment variables to hold configuration values .env file
 - OOP (object oriented programming)
 - I've followed [airbnb](https://github.com/airbnb/javascript) Coding standard with a eslint ,help to keep thing into prespective.
 
 # How to start the project 
 
 First you clone the project using the following command :

 git clone repoURL
 
 Delete the existing package.lock.json and run npm install 
 
 Then you create a postgres database Named app_name with the following credintials 
 
 username : postgres 
 
 password : password
 
 Run the migration using the following command :
 npx sequelize-cli db:migrate
 
 Finally you run npm start 
  
Future improvements utilize compenent based structe

Please feel free to :star:  happy programming :v: 
