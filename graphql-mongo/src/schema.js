import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `

type Query {
    hello : String
}

type Mutation {}

input BookInput {}

`;

//resolvers = functions resolving types (Query, Mutations, Custom Type)
//typeDefs = definition of all Types(Query, Mutations)
export default makeExecutableSchema ({typeDefs : typeDefs, resolvers: resolvers})