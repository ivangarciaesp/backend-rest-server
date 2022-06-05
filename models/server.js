const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();

        this.app.usersPath = '/api/users';

        //Here we invoke the Middlewares...
        this.middlewares();

        //Here we invoke the Routes on our application...

        this.routes();
    }

    middlewares() {


        //CORS
        this.app.use(cors());

        //Enable the ability to read JSON data on every request to the server.
        this.app.use(express.json());

        // here we are declaring the public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.app.usersPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }

}

module.exports = Server;