import express from "express"


const { graphqlHTTP } = require('express-graphql');
import {connect}   from './database';
import schema  from './schema' 
const app = express();
connect();


app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    graphiql: true,
} ) );

app.listen( 3000, () => {
    console.log('running')
})