# Boat Butler

Boat Butler is a web app for companies to access a dashboard with job proposals.

The following technologies were used in this project for the reasons below

### Node.js
Node.js was the main requirement for this task, serving as the base for the back-end server.

### Sails.js
Sails.js was the chosen Node.js framework because it fulfills all the requirements for this project and more:
- Database access (SQL)
- ORM
- MVC Pattern
- Secure and scalable RESTful APIs

### Passport.js
Passport.js was used to serve as the middleware responsible for the login functionality.

### jQuery Bootstrap
jQuery and Bootstrap serve as the front-end layer for the client.

## Installation

You will need to install Node.js if you did not yet, head on to their website to see instructions on how to do it:
https://nodejs.org/en/

You also need Sails.js installed
```
$ npm install sails -g
```

A SQL database is necessary in order for the app to function correctly.
Change the following line in the file *config/datastore.js* to reflect the configuration of the database
```
user: '<DATABASE-USER>'
password: '<USER-PASSWORD>',
port: '<PORT>',
host: '<HOST>',
database: '<DATABASE-NAME>'
```
The application will create the tables and populate them with dummy data.
```
USER LOGIN
username: person@email.com
password: secret
```

## Usage

```
$ cd <PROJECT-FOLDER>
$ npm install
$ sails lift
```
You can now access the web app in a browser through the URL
```
http://<HOST>:<PORT>/
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
