import React, { Component } from 'react'
import '../App.css'
import {Carousel} from "react-bootstrap"


export default class Slider extends Component {

    render() {

        
        return (

            <header>
            <Carousel className="carousel " data-ride="carousel">
                
                <div className="carousel-inner" role="listbox">



                    <Carousel.Item className="carousel-item imgSlide1 active" interval={500}>
                        <Carousel.Caption className="carousel-caption ">
                            <div className="row d-flex justify-content-center align-items-center">

                                <div className="col-11 col-md-8">
                                    <div className="masthead-heading lead text-center">
                                        <h1 className="title-slide"> Sumate a la comunidad de Velvet Revolver </h1>
                                        <a href="https://www.instagram.com" target="_blank">
                                            <div className="btn btn-primary btn-xl mt-2">
                                            <i class="fab fa-instagram"></i>  &nbsp; Seguinos en Instagram! 
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item className="carousel-item imgSlide2" interval={500}>
                        <Carousel.Caption className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">

                                <div className="col-11 col-md-8">
                                    <div className="masthead-heading lead text-center ">
                                        <h1 className="title-slide">Nuevas fechas disponibles en Gran Buenos Aires</h1>
                                        <a href="#tour">
                                            <div className="btn btn-primary btn-xl mt-2">
                                            <i class="far fa-calendar-alt"></i> &nbsp; Ver fechas
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item className="carousel-item imgSlide3" interval={500}>
                        <Carousel.Caption className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">

                                <div className="col-11 col-md-8">
                                    <div className="masthead-heading lead text-center">
                                        <h1 className="title-slide"> Apoyanos con tu compra </h1>
                                        <a href="https://www.mercadolibre.com.ar/">
                                            <div className="btn btn-primary btn-xl mt-2">
                                            <i className="fas fa-shopping-cart"></i> &nbsp; Ir a la tienda
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </div>
                
            </Carousel>
        </header>

        )
    }
}