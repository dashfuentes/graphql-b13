//Setting up Yoga Graphql Server
import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./graphql/resolvers";
import path from 'path';

export const server = new GraphQLServer( {
    //target the relative path schema (Queries,Mutations)
    typeDefs: path.join( __dirname, "graphql/schema.graphql" ),
    //target the functions regarding the schema elements( ()=> {})
    resolvers
})