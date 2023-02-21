import { useEffect, useState } from "../lib";

const add = function ()
{
    const urlParams = new URLSearchParams( window.location.search );
    const id = urlParams.get( 'id' )

    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( "http://localhost:3000/users" )
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
        document.querySelector( '#btn_them' ).addEventListener( "click", function ()
        {

            const name = document.querySelector( '#name' ).value
            const nam = document.querySelector( '#nam' ).value
            const text = document.querySelector( '#text' ).value
            const image = document.querySelector( '#image' )
            console.log( name );
            console.log( nam );
            console.log( text );
            console.log( image );
            const newUser = {

                "nam": nam,
                "name": name,
                "text": text,
            }
            fetch( "http://localhost:3000/users", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( newUser )
            } )
            window.location.href = "/"
        } )
    } );
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

form {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
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
        <p>anh:<input type="file" multiple name="avatar" id="image" />
        <p>tên: <input id="name" type="text" class="border"/></p>
        <p>năm: <input id="nam" type="text" class="border"/></p>
        <p>giới thiệu:<input id="text" type="text" class="border"/></p>
        <button id="btn_them">them</button>
    </div>
        `
}

export default add