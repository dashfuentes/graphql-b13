import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from "./resolvers";

/**
 * Represents the schema with the diffents types
 * @Query means request in order to fetch data like GET
 * @Mutation means create,update and delete resources like POST,PUT, DELETE
 * @Book means the model from the database (table(sql), collection(no-sql))
 * @BookInput means the input coming from the request like the request.body({name: "test", version: "test"})
 */
const typeDefs = `

type Query {
    hello : String
    getBooks : [Book]

}

type Mutation {
    createBook(input: BookInput ): Book
}

type Book {
    _id: ID,
    title: String!,
    author: String,
    date: String,
    version: Int

}

input BookInput{
    title: String!,
    author: String,
    date: String,
    version: Int
}



`;

//resolvers = functions resolving types (Query, Mutations, Custom Type)
//typeDefs = definition of all Types(Query, Mutations)
export default makeExecutableSchema( {
    typeDefs: typeDefs,
    resolvers: resolvers
} );