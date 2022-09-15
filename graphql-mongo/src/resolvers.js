import Book from "./models/Book";

/**
 * Represents the functions to resolve every type definition
 * @Query block of functions to resolve the type definition Query
 * @Mutation block of function to resolve the type definition Mutation
 */
export const resolvers = {
    Query: {
        //GET, GETALL,GETBYID
        hello: () => { return "hello world" },
        async getBooks() {
            const books = await  Book.find();
            return books;
        }

        //find By id
        
    },
    Mutation: {
        //POST,PUT,DELETE
       async createBook( _, { input } ) {

            console.log(input)
            const newBook = new Book( input );
            await newBook.save();
            return newBook;
        }

        //PUT

        //DELETE
    }
}