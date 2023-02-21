
import { useEffect, useState } from "../lib"

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



    return /*html*/`
      <!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- google font -->


        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet" />
        <!-- main css -->
        <link rel="stylesheet" href="./style.css" />
        <title>Portfolio</title>
    </head>

    <body>

        <!-- overlay -->
        <section id="overlay"></section>
        <!-- header -->
        <header>
            <div class="container">
                <div id="app">
                    <nav class="navbar">
                        <!-- logo -->
                        <div class="navbar__logo">
                            <img src="./img/logo.svg" alt="website logo" />
                        </div>
                        <!-- links -->
                        <ul class="navbar__links" id="app">

                            <li class="navbar__link"><a href="#productWorks">Work</a></li>
                            <li class="navbar__link"><a href="#things">About</a></li>
                            <li class="navbar__link"><a href=" ">Blog</a></li>
                            <a href="#contact"><button class="navbar__btn">Contact</button></a>
                        </ul>
                        <!-- menu button -->
                        <div class="">
                            <div class=""></div>
                        </div>
                    </nav>
                </div>
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
                <div class="banner__heading">
                    <h1>Hello, i am giang </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate a
                        est culpa soluta modi beatae unde incidunt dolorem placeat maiores?
                    </p>
                    <a target="_blank" href=" https://drive.google.com/file/d/1a-87_FTKai1j6WUVFqrEw1QSrzOEOqd5/view"><button
                            class="banner__btn" >MY Resume</button></a>
                    <div class="banner__socials">
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                        <a href="#"><i class="fab fa-behance"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
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
                <div class="things__item">
                    <!-- img -->
                    <img src="./316267351_584000617061638_1848260812688891873_n.jpg" alt="illustration of women" />
                    <!-- text -->
                    <div class="things__item--heading">
                        <h3>Một chút về bản thân </h3>
                        <p>
                            Tôi đang là sinh viên kì 5 của trường Cao Đẳng FPT POLYTECHNICH chuyên ngành thiết kế
                            WEBSITE
                            thời gian chủ yếu là mình tự học mình thường tự học trên f8 hoặc là trên các nền tảng
                            youtube ....

                            Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục
                            tiêu hiện tại
                            của mình là trở
                            thành một lập trình viên Frontend.
                        </p>
                    </div>
                </div>
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
                            <span class="text-[#8695A4] pl-2">Dashboard</span>
                        </div>
                        <p class="text-[16px] pb-2">${ data.text }</p>
                    </div>
                    <div class="w-full py-2 text-center bg-gray-200 dark:bg-slate-600">
                    <a id="button" href ="/create?id=${ data.id }">View in github</a>
                    
                    </div>
                    
                </div >
`} ).join( "" ) }
            </div>

        </div>

        <div class="works__btn">
            <a target="_blank" href="https://github.com/anhgiang22112003/assm_giang"><button>View Works</button></a>
        </div>



        <!-- blog-->

        <!-- btn -->

        <!-- footer -->

        <section class="contact" id="contact">
            <div class="heading white" style="text-align: center; color: aliceblue; margin-top: 20px;">
                <h1>Contact US</h1>
                <p>I'm a Front End Web Developer.</p>
            </div>
            <div class="content">
                <div class="contactInfo">
                    <h3>Contact Info</h3>
                    <div class="contactInfoBx">
                        <div class="box">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>Hà Nội <br> Viet Nam</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="text">
                                <h3>Phone</h3>
                                <p>0343883727</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fa fa-envelope-o"></i>
                            </div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>honggiang22112003@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="formBx">
                    <form>
                        <h3> Message Me</h3>
                        <input type="text" name="" placeholder="Full Name">
                        <input type="email" name="" placeholder="Email">
                        <textarea placeholder="Your Message"></textarea>
                        <input type="submit" value="Send">
                    </form>
                </div>
            </div>
        </section>
        <!-- fontawesome -->
        <script src="https://kit.fontawesome.com/28c0af3030.js" crossorigin="anonymous"></script>
        <!-- main js -->
        <script src="./main.js"></script>
        <!-- footer-->
        <div style="text-align: center ; background-color: black; color: aliceblue;" class="">
            Designed and made with ❤ by<!-- -->

            <span class="">giangnhph</span>
            <p>© 2023 </p>
        </div>

    </body>

</html>
        `
}

export default homePage