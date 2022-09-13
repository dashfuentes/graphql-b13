const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

//graphql schema
const schema = buildSchema(
	`

    type Query {
        welcome(name: String!): String
        sayTrue: Boolean
    }

    `
);
const sayHello = ( args ) => {
    
	return "Hello world  " + args.name;
};
const sayTrue = () => {
	return true;
};

//graphql root object

const root = {
	//left side query name || right side function name
	welcome: sayHello,
	sayTrue: sayTrue,
};

//route graphql client
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(3000, () => {
	console.log("running");
});
