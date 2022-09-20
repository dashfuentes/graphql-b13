//Imports
const express = require( 'express' );
const app = express();

//Initializations
app.set( 'port', 4000 );

//Settings


//Middlewares

//Routes

//Public (telling node where are static files)


//Runtime Server
app.listen( app.get( 'port' ), () => {
    console.log( 'Server is in port', app.get( 'port' ) );
})