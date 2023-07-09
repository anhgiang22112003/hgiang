import { useState, useEffect } from "../lib";
import about from "./comprent/about";
import footer from "./comprent/contact";
import header from "./comprent/header";
import rename from "./comprent/rename";



const homePage = function ()
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
    }, [] );

    const idUser = localStorage.getItem( 'idUser' )
    const [ login, setLogin ] = useState( [] )
    useEffect( function ()
    {
        fetch( `http://localhost:3000/login/${ idUser }` )
            .then( function ( response )
            {
                return response.json()
            } )
            .then( function ( data )
            {
                setLogin( data )
            } );
    }, [ idUser ] );

    useEffect( function ()
    {
        const isLogin = localStorage.getItem( "isLogin" )
        const role = localStorage.getItem( "role" )

        if ( isLogin === 'true' )
        {
            document.getElementById( "login" ).innerHTML = /*html*/`
                <div class="flex mt-2 ml-3">
                    <p>${ login.name }</p>
                    <div id="logout" class="hover:text-red-500">
                        <i class="fa fa-caret-down mt-1 ml-1"></i>
                    </div>
                </div>
            `
            const logout = document.getElementById( "logout" )
            logout.addEventListener( "click", function ()
            {
                localStorage.removeItem( "isLogin" )
                localStorage.removeItem( "idUser" )
                localStorage.removeItem( "role" )

                window.location.href = "/"
            } )
        }
        else
        {
            document.getElementById( "login" ).innerHTML = /*html*/`
            <a href="/login" class="hover:text-red-500">Đăng nhập</a> / 
            <a href="" class="hover:text-red-500">Đăng kí</a>
            `
        }
    } );

    return /*html*/`
    

    <div id="login">

    </div>
   
    <!-- overlay -->
        <section id="overlay"></section>
        <!-- header -->
        <header>
        
            <div class="container">
            <div class="navbar__logo">
            <img src="./img/logo.svg" alt="website logo" />
          </div>
               ${ header() }
            </div>
        </header>
        <!-- banner -->
        <section id="banner">
            <div class="container">
                <!-- img -->
                <div class="banner__img">
                    <img src="./img/banner-img.png" alt="" />
                </div>
                <!-- heading -->
                ${ rename() }
            </div>
        </section>
        <!-- things -->
        <section id="things">
            <div class="container">
                <!-- dec -->
                <div class="things__dec">
                    <img src="./img/things-dec-l.png" alt="illustration of leaf" />
                </div>
                <!-- dec -->
                <div class="things__dec">
                    <img src="./img/things-dec-r.png" alt="illustration of leaf" />
                </div>
                <!-- heading -->
                <h2>Things I Do</h2>
                <!-- item 1 -->
               ${ about() }
                <!-- item 2 -->


            </div>
        </section>
        <!-- works -->

        <h2 style=" text-align: center;">Recent Works</h2>
        <!-- img -->
    
        <div id="productWorks" class=" gap-10">
    
        <div class="grid grid-cols-1 md:grid-cols-3 mx-auto w-[1200px] gap-10" >
           ${ data.map( ( data ) =>
    {
        return `
 <div class="w-[400px] transition duration-150 ease-in-out">
                  <div class="mt-2">
                        <img  src="${ data.image }"
                            width="480px" height="480px" alt="">
                    </div>
                    <div class="mx-4">
                        <h3 class="font-bold text-[30px] ">${ data.name }</h3>
                        <div class="my-3">
                            <span class=" bg-[#142850] text-[#FFFFFF] rounded-xl px-2 w-[62px] text-[18px] ">${ data.nam }</span>
                            <span class="text-[#8695A4] pl-2">${ data.cv }</span>
                        </div>
                        <p class="text-[16px] pb-2">${ data.text }</p>
                    </div>
              <div class="w-full py-2 text-center bg-gray-200 dark:bg-slate-600">
  ${ localStorage.getItem( "role" ) === "Admin" ? `<a id="button" href="/create?id=${ data.id }">View in github</a>` : '' }
</div>
                    
                </div >
`} ).join( "" ) }
            </div>
<div class="works__btn">
            <a target="_blank" href="https://github.com/anhgiang22112003/assm_giang"><button>View Works</button></a>
        </div>
        </div>

        



        <!-- blog-->

        <!-- btn -->

        <!-- footer -->

             <footer id="footer" >
      <div class="container ">
        <!-- dec -->
        
        <div class="flex justify-between"> 
          <div class="footer__dec w-[300px]">
          <img width="300px" src="./img/things-dec-l.png" alt="illustration of leaf" />
        </div>
        <!-- img -->
           <div class="footer__img w-[500px] " >
          <img src="./img/footer-img.png" alt="illustration of women">
        </div>
       </div>
         
       
      ${ footer() }
       
         </div>
         </div>
          </footer>

         <div class="footer__heading">
       


    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/28c0af3030.js" crossorigin="anonymous"></script>
    <!-- main js -->
        <!-- footer-->
        <div style="text-align: center ; background-color: black; color: aliceblue;" class="">
            Designed and made with ❤ by<!-- -->

            <span class="">giangnhph</span>
            <p>© 2023 </p>
        </div>

    
        `
}

export default homePage