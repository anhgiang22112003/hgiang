import { useEffect, useState } from "../../lib";

const login = function ()
{
    const urlParams = new URLSearchParams( window.location.search );
    const id = urlParams.get( 'id' )

    const [ data, setData ] = useState( [] )
    useEffect( function ()
    {
        fetch( 'http://localhost:3000/login' )
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
        document.querySelector( '#login' ).addEventListener( "click", function ()
        {

            const name = document.querySelector( '#name' ).value
            const pass = document.querySelector( '#pass' ).value
            data.forEach( data =>
            {
                if ( data.name == name && data.password == pass )
                {
                    localStorage.setItem( "isLogin", "true" )
                    localStorage.setItem( "idUser", data.id )
                    localStorage.setItem( "role", data.role )

                }
            } )
        } )
        const isLogin = localStorage.getItem( "isLogin" )
        if ( isLogin === 'true' )
        {
            window.location.href = "/"
        }

    } )
    return /*html*/`
     <div>
        <p>name: <input class="w-[400px] outline-0 border" id="name" type="text"  /></p>
        <p>pass: <input id="pass" class="w-[400px] outline-0 border" type="text"  /></p>
        <button ><a id="login" href ="">login</a></button>
    </div>

    `
}
export default login
