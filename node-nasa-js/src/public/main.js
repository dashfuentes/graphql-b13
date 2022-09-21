"use strict"

let btn = document.querySelector( '.search-place' );
console.log(btn)

btn.addEventListener( "click", ( e ) => {
    e.preventDefault();
    //get input values
    let getCoordinates = document.querySelector( '#lat-lon' ).value;
    let getDate = document.querySelector( '#date' ).value;
    //build dynamically the url endpoint http://localhost:4000/get-places
    const uri = location.origin + '/get-place' // http://localhost:4000/get-place
    //split the coordinate string in order to create lat and lon info
    const coordinates = getCoordinates.split( "," )
    const points = {
        lon: coordinates[0],
        lat: coordinates[1],
        date: getDate
    }
    
    //build async function to send coordinates to endpoint
   async function sendPoints( url = "" ) {
        const response = await fetch( url, {
            method: "POST",
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(points)
        } )
        
        return response.json();
    }

    sendPoints( uri ).then( ( data ) => {
        console.log( 'response from endpoint', data )
    } );

    //build function to render tiles
})