import { useEffect, useState } from "../lib";

const create = function ()
{
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
    const uploadfile = ( files ) =>
    {
        const clouName = "dbahu9bvi";
        const preset_name = "demo-upload";
        const folder_name = "ecma";
        const url = [];
        const api = `https://api.cloudinary.com/v1_1/${ clouName }/image/upload`;
        const formData = new FormData();// key value 
        formData.append( "upload_preset", preset_name )
        formData.append( "folder", folder_name )
        for ( const file of files )
        {
            formData.append( "file", file )
            fetch( "http://localhost:3000/users", {
                method: "POST",

                headers: {
                    "Content-Type": "mutipart/form-data"
                },
                body: JSON.stringify( formData )


            } ).then( ( response ) => url.push( response.data.secure_url ) );

        }
        return url;
    }

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
        <p>anh:<input type="file" name="avatar"  multiple id="image" value="${ data.image }"  required />
        <p>tên: <input id="name" type="text" class="border"  value="${ data.name }"/></p>
        <p>năm: <input id="nam" type="text" class="border"  value="${ data.nam }"/></p>
        <p>giới thiệu:<input id="text" type="text" class="border"  value="${ data.text }"/></p>
        <button id="btn_update">sửa</button>
        <button ><a id="button" href ="/xoa">xóa</a></button>
        <button ><a id="button" href ="/page/add">thêm</a></button>

    </div>
        `
}

export default create