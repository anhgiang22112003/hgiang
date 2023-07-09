import { useState, useEffect } from "../../lib";



const footer = function ()
{
  const [ data, setData ] = useState( [] )
  useEffect( function ()
  {
    fetch( 'http://localhost:3000/footer' )
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
      
        
                        <!-- logo -->
                       

                         ${ data.map( ( data ) =>
  {
    return `
         
          <h1>${ data.control } </h1>
          <!-- contact -->
          <div class="footer__contact">
            <a href="tel:901234567">
              <i class="fas fa-phone-alt"></i>
              <p>${ data.phone }</p>
            </a>

            <a href="mailto:info@me.com">
              <i class="fas fa-envelope"></i>
              <p>${ data.gmail }</p>
            </a>
         
         
        </div>
                        
                        ` } ) }

               
       

`
}
export default footer

