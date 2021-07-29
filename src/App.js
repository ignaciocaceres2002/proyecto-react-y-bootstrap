import React, { Component } from 'react'
import Menu from './components/menu'
import Slider from './components/slider'
import LaBanda from './components/labanda'
import Tour from './components/tour'
import Footer from './components/footer'
import Slogan from './components/slogan'
import './App.css'


function App() {
    return (

        <div className = "App" id = "home" >

            { /*============================================  Menú ============================================*/ } 
            
            <Menu/>

            { /*============================================  Slider ============================================*/ }

            <Slider/>

            { /*============================================  La Banda ============================================*/ }

            <LaBanda/>

            { /*============================================  Slogan ============================================*/ }

            <Slogan/>

            { /*============================================  Tour ============================================*/ }

            <Tour/>

            { /*============================================  Footer ============================================*/ }

            <Footer/>

        </div>

    );
}

export default App;