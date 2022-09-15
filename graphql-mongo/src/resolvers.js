import Book from "./models/Book";

export const resolvers = {
    Query: {
        //GET, GETALL,GETBYID
        hello: ()=> {return "hello world"}
        
    },
    Mutation: {
        //POST,PUT,DELETE

    }
}