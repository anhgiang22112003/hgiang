
import { useState, useEffect } from "../../lib"
const rename = () =>
{
    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( 'http://localhost:3000/post' )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setData( data )
            } );
    }, [] );
    return ( /*html*/`
     <div class="banner__heading">

     ${ data.map( ( data ) =>
    {
        return `<h1>${ data.gt }</h1>
                    <p>
                        ${ data.text }
                    </p>
                    <a target="_blank" href="${ data.rename }"><button
                            class="banner__btn">MY Resume</button></a>
                    <div class="banner__socials">
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                        <a href="#"><i class="fab fa-behance"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>


         `


    } ) }
                    
  
  
  
    `

    )
}

export default rename