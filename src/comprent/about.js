
import { useEffect, useState } from "../../lib"
const about = () =>
{
    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( 'http://localhost:3000/about' )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setData( data )
            } );
    }, [] );
    return (/*html*/`
  
   <div class="things__item">
  ${ data.map( ( data ) =>
    {
        return `
    <!-- img -->
                    <img src="${ data.img }" alt="illustration of women" />
                    <!-- text -->
                    <div class="things__item--heading">
                        <h3>Một chút về bản thân </h3>
                        <p>
                        ${ data.list }</p>
                    </div>

  
  
      `


    } ) }
                  
                </div>
  
    `

    )
}

export default about