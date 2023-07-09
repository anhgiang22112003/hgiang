import { useEffect, useState } from "../lib"


const admin = () => 
{
    const [ data, setdat ] = useState( [] )
    useEffect( () =>
    {
        fetch( "http://localhost:3000/posts" )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setdat( data )
            } );

    }, [] )
    useEffect( () =>
    {
        const btns = document.querySelectorAll( '.btn-remove' )
        for ( let btn of btns )
        {
            btn.addEventListener( "click", function ()
            {
                const id = this.dataset.id
                fetch( `http://localhost:3000/post/${ id }`,
                    {
                        method: "DELETE",

                    } )
                    .then( () =>
                    {

                        const newproject = data.filter( ( data ) => data.id != id )
                        setdat( newproject );
                    } )

            } )
        }


    } )
    return /*html*/`
    
   <table class="table table-bordered">
    <thead>

      <tr>
      <th>id</th>
      <th>img</th>
      <th>name</th>
      <th>gia</th>
      <th>author</th>
      
      </tr>
       

    </thead>
   
    ${ data.map( ( data, index ) =>
    {

        return `<div>
      <tr>
      <td>${ index + 1 }</td>
      <td>${ data.img }</td>
      <td>${ data.title }</td>
      <td>${ data.gia }</td>
    
      <td>${ data.author }</td>
       </tr>
  <td>
  <button data-id="${ data.id }" class="btn btn-danger btn-remove" >xóa </button>
     </td>
      </div>
    `


    } ).join( "" ) }
    

  </table>
    `

}

export default admin