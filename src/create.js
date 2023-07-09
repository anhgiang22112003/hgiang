import { useEffect, useState } from "../lib";
import checkRole from "./comprent/checkRole"

const create = function ()
{

    checkRole()
    const urlParams = new URLSearchParams( window.location.search );
    const id = urlParams.get( 'id' )

    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( `http://localhost:3000/users/${ id }` )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setData( data )
            } );
    }, [] )

    useEffect( function ()
    {
        document.querySelector( '#btn_update' ).addEventListener( "click", function ()
        {
            const image = document.querySelector( '#image' )
            const name = document.querySelector( '#name' ).value
            const nam = document.querySelector( '#nam' ).value
            const text = document.querySelector( '#text' ).value
            const newUser = {
                "id": id,
                "nam": nam,
                "name": name,
                "text": text,
            }
            fetch( `http://localhost:3000/users/${ id }`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( newUser )
            } )
            window.location.href = "/"
        } )
    } )

    console.log( data );

    return /*html*/`
    <style>


		input {
			padding: 0.5rem;
			width: -webkit-fill-available;
			border-radius: 0.25rem;
			border: 1px solid rgb(189, 189, 189);
		}
		input:focus {
			outline: none;
		}


    </style>
    <div>
       <button ><a id="button" href ="/">home</a></button>
        <p class="w-[300px] mx-auto">ẢNH:<img class=" "  name="avatar"  multiple id="image" src="${ data.image }"  required /> </p>
        <p>TÊN: <input class="w-[400px]" id="name" type="text" class="border"  value="${ data.name }"/></p>
        <p>NĂM: <input id="nam" class="w-[400px]" type="text" class="border"  value="${ data.nam }"/></p>
        <p>GIỚI THIỆU:<textarea class="w-[400px]" id="text" type="text" class="border">${ data.text }"</textarea></p>
        <button id="btn_update">sửa</button>
        <button ><a id="button" href ="/xoa">xóa</a></button>
        <button ><a id="button" href ="/page/add">thêm</a></button>

    </div>
        `
}

export default create