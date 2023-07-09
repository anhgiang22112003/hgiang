
import { useEffect, useState } from "../lib"

const xoas = function ()
{
    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( 'http://localhost:3000/users' )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setData( data )
            } );
    }, [] )
    useEffect( () =>
    {
        const btns = document.querySelectorAll( ".btn-remove" );
        for ( let btn of btns )
        {
            btn.addEventListener( "click", function ()
            {
                const id = this.dataset.id;
                fetch( `http://localhost:3000/users/${ id }`, { method: "DELETE" } )
                    .then( () =>
                    {
                        //xoas o client : rerender
                        const newProjects = projects.filter( ( users ) => projects.id != id );
                        setData( newProjects );
                    } )

            } );

        }

    } )

    return /*html*/`
    <button ><a id="button" href ="/">home</a></button>
        <table>
       <thead>
    <tr>
    <th>id</th>
    <th>img</th>
    <th>name</th>
    <th>nam</th>
    <th>giới thiệu</th>
    </tr> 
  </thead>
  <tbody>
  ${ data.map( ( data, index ) => `
  <tr>
  <td>${ index + 1 } </td>
  <td>${ data.image }</td>
  <td>${ data.name }</td>
  <td>${ data.nam }</td>
  <td>${ data.text }</td>
  <td>
  <button data-id="${ data.id }" class="btn btn-danger btn-remove" >xóa </button>

  </td>
  
  </tr>
  `).join( "" ) }
  
  
  
  
  
  </tbody>
  </table>

        `

}

export default xoas