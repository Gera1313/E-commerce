# Object-Relational Mapping (ORM): E-Commerce Back End

## My project

I am to build the back end for an e-commerce site. Front end code was already provided to me. I will configure a working Express.js API to use Sequelize to interact with a MySQL database.


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

1. Download the copy of the project and open it in an IDE (preferably Visual Studio).
2. Run `npm install` from the root folder to install all the dependencies.
3. Open the shell using `mysql -u root -p` and run `source db/schema.sql`, this will create the database. Once done `exit` the shell.
4. Now create `.env` file in the root and add `DB_USER`, `DB_PW` and `DB_NAME` fields in the file and save it.
5. Data can be seeded using `npm run seed` command, as this has been setup as part of 'package.json' file.
7. From the root folder, run `npm start`, this will create the connection.
8. Now go to Insomnia, and perform actions as shown in the demo video.


## Notes

I will use the MySQL2 and Sequelize packages to connect the Express.js API to a MySQL database and the dotenv package to use environment variables to store sensitive data, like my MySQL username, password, and database name.

I will use the schema.sql file in the db folder to create my database using MySQL shell commands. Use environment variables to store sensitive data, like my MySQL username, password, and database name. 

My database will contain the following four models, including the requirements listed for each model: Category, Products, Tag, Product Tag. 

API Routes to Perform RESTful CRUD Operations:

I have filled out the routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models.

Seeding the Database:

After creating the models and routes, I run npm run seed to seed data to my database so that I can test the routes.

Sync Sequelize to the Database on Server Start:

I have created the code needed in server.js to sync the Sequelize models to the MySQL database on server start.

March 12, 2024: Revisiting my work and fix all of the issues. 

April 2, 2024: Reworked the routes. Get errors in tags route only now. Fixed the tags route.

April 3, 2024: My original code finally works 100%. 

## Usage

The following images show examples of the application's API routes being tested in Insomnia Core.

## Links

[Repository](https://github.com/Gera1313/E-commerce)

[Updated Video](https://youtu.be/Vwn2NulQSc8)

## License

## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)