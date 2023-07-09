import { useState, useEffect } from "../../lib";



const header = function ()
{
    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( 'http://localhost:3000/menu' )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setData( data )
            } );
    }, [] );

    return/*html*/`
             <div id="app">
                    <nav class="navbar">
                        <!-- logo -->
                       

                         ${ data.map( ( data ) =>
    {
        return `
                        
                                <ul class="navbar__links">
            <li class="navbar__link"><a href="${ data.link }">${ data.nav }</a></li>
          
            <a href="${ data.link }"><button class="navbar__btn">${ data.title }</button></a>
          </ul>
                        ` } ).join( "" ) }
                        <!-- menu button -->
                        <div class="">
                            <div class=""></div>
                        </div>
                    </nav>
                </div>

`
}
export default header

