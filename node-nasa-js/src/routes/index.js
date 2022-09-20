const express = require( 'express' );
const router = express.Router();
const fetch = require( 'node-fetch' );
const fs = require( 'fs' );


router.get( '/', ( req, res ) => {
    //  res.render("")
} );

router.post( "/get-place", ( req, res ) => {
    const { lon, lat } = req.body;
    const currentDate = new Date().toISOString();
    const date = req.body.date ? req.body.date : currentDate;
    const baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&dim=0.025&api_key=aJHIN99cuHZzd2sr8bNSyeKZo74LslkNgOZ5I3Nv`   
    


    
const download = async () => {
    

}

})

