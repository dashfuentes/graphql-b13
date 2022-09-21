const express = require( 'express' );
const router = express.Router();
const fetch = require( 'node-fetch' );
const fs = require( 'fs' );


router.get( '/', ( req, res ) => {
   return   res.render("layouts/main")
} );

router.post( "/get-place", ( req, res ) => {
    console.log( req.body )
    const { lon, lat } = req.body;
    console.log( 'longitud', lon );
    console.log( 'latitud', lat )
    const currentDate = new Date().toISOString().slice(0, 10); //2022/09/21 
    console.log( currentDate );
    const date = req.body.date ? req.body.date : currentDate;
    const baseUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=0.025&api_key=aJHIN99cuHZzd2sr8bNSyeKZo74LslkNgOZ5I3Nv`   
 
    
    const download = async () => {
        
        //get the img response from nasa api
        const response = await fetch( baseUrl );
        console.log(response)
        //Parse the img to a binary file
        const buffer = await response.buffer();
        console.log(buffer)

        
        fs.promises
            .writeFile( `./src/public/imgs/main.jpg`, buffer )
            .then( () => {
            console.log('success')
            })

    }

    download();

})

module.exports = router;
