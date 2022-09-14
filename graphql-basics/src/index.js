const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require( "graphql" );
const { courses } = require( './data.json' ); 

const app = express();

//graphql schema
const schema = buildSchema(
	`

    type Query {
        welcome(name: String!): String
        sayTrue: Boolean
    }

	type Mutation {
		updateCourse(id: Int!, author: String) : Course
	}

	type Course {
		id:  Int,
		name: String,
		author: String
	}

    `
);
const sayHello = ( args ) => {
    
	return "Hello world  " + args.name;
};
const sayTrue = () => {
	return true;
};

const updateCourse = ( { id, author } ) => {
	
	//find the target update to set the new author field
	courses.map( course => {
		if ( course.id == id ) {
			//console.log( course )
			course.author = author;
			return course
		}
	} );

	console.log(courses) // {id: 1 , author: "dash berlin"}

	//return the object right after update
	return  courses.filter( course => course.id === id )[0];
	
}

//graphql root object

const root = {
	//left side query name || right side function name
	welcome: sayHello,
	sayTrue: sayTrue,
	updateCourse: updateCourse
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
