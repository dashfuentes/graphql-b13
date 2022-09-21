//Imports
const express = require( 'express' );
const exphbs = require( 'express-handlebars' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );

//Initializations
const app = express();
app.set( 'port', 4000 );

//Settings

//telling node where is my folder view
app.set( 'views', path.join( __dirname, 'views' ) );
// {id:1,name: 'carlos', views: '/c/Users/carlf/Desktop/graphql-b13/node-nasa-js/views'}
// console.log(app.get( 'views' )); ///c/Users/carlf/Desktop/graphql-b13/node-nasa-js/views// ///c/Users/carlf/Desktop/graphql-b13/node-nasa-js/views/layouts

app.engine( '.hbs', exphbs.engine( {
    defaultLayout: 'main',
    // /c/Users/carlf/Desktop/graphql-b13/node-nasa-js/views/layouts
    layoutsDir: path.join( app.get( 'views' ), 'layouts' ),
    extname: '.hbs'
} ) );
app.set('view engine', '.hbs')

//Middlewares
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

//Routes
app.use(require('./routes/index'))
//Public (telling node where are static files)
app.use( express.static( path.join( __dirname, 'public' ) ) );

//Runtime Server
app.listen( app.get( 'port' ), () => {
    console.log( 'Server is in port', app.get( 'port' ) );
})