

const blog = () =>
{
    return (/*html*/ `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <script src="https://cdn.tailwindcss.com"></script>

    <body>

        <div class="max-w-4xl mx-auto m-4 px-5 ">
            <div class="flex justify-end">
                <button id="button" class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor"
                        class="bi bi-justify" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            <div class="">
                <ul id="menu" class="md:flex md:space-x-4 font-bold text-[20px] flex justify-end hidden ">
                    <li><a href="index.html" class="hover:text-red-600">home</a></li>

            </div>
            <script>
                const menu = document.getElementById( "menu" );
                const button = document.getElementById( "button" );

                button.addEventListener( "click", function ()
                {
                    menu.classList.toggle( "hidden" );
                } );
            </script>
            <div class="md:w-[700px]">
                <h1 class="font-bold text-[44px] py-8">Blog</h1>
                <div id="products">

                </div>

                <div>
                    <div class="flex space-x-4 justify-center my-8">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405086/z3467811922052_c695fa08a2e8cc9f73a493dc18fbefc3_jkqycd.jpg"
                            alt="">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405104/z3467811904282_1c5be99c6c5f54f72ca1dedf9683e31f_kolit8.jpg"
                            alt="">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405112/kk_x3sbs4.jpg" alt="">
                        <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654405097/z3467811887304_82e66009d06c03c016d8f74c2846ee79_xzkdf9.jpg"
                            alt="">
                    </div>

                    <div class="justify-center flex my-2">
                        <span>Copyright ©2020 All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
        <script type="module" src="./javacript/blog.js"></script>
    </body>

</html>`

    )
}

export default blog