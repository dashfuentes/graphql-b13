//Import Graphql Yoga Server
import {server} from './server'
//Import database connection
import "./database";

server.start( { port: 4000 }, ( { port } ) => {
    console.log( "Server on port", port )
} );


