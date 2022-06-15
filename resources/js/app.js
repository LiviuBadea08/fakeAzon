/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
require('../css/nav.css');
require('../css/card.css');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// home
require('./components/home/MainCard');
require('./components/home/SecondCard')

// nav 
require ('./components/nav/Navbar');
require('./components/nav/Search');
require ('./components/nav/Footer');

// shop 
require('./components/shop/Banner');
require('./components/shop/Products');
require('./components/shop/ShopCard');

// form 
require('./components/form/Login');

// products
require('./components/products/ProductShow');

// extra 
require('./components/Buttons');
require('./components/CardUser');