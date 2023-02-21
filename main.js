
// import { render, router } from './lib';
// // import blog from './src/comprent/page/blog'
// // import home from './src/comprent/page/home';
// // import app from './src/comprent/app';
// // import ct from './src/comprent/page/ct';
// // import ProjectDetailPage from './src/comprent/page/project-detail';
// import createPage from './src/comprent/page/create';

// var app = document.querySelector( "#app" )

// // router.on( "/blog", () => render( blog, app ) );
// // router.on( "/project/:projectId/edit", ( { data } ) => render( () => app( data ), app ) );
// // router.on( "/admin/projectsAdmin", () => render( ct, app ) );
// // router.on( "/project/:projectId", ( { data } ) => render( () => ProjectDetailPage( data ), app ) );
// router.on( '/create', function ()
// {
//     console.log( "Admin Product Page" );
//     re( createPage, app )
// } )



// router.resolve
import { router, render } from './lib';
import create from './src/create';
// import demo from './src/demo';
import blog from './src/blog';
import add from './src/add';
import './style.css'
import xoa from './src/xoa';
import homePage from './src/home';

// Khai bao DOM
var app = document.querySelector( "#app" )
router.on( "/page/add", () => render( add, app ) )
router.on( "/blog", () => render( blog, app ) )
router.on( "/create", () => render( create, app ) )
// router.on( "/", () => render( demo, app ) )
router.on( "/", () => render( homePage, app ) )
router.on( "/xoa", () => render( xoa, app ) )
router.resolve()


