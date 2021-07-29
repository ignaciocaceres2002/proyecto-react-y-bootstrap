import React, { Component } from 'react'
import '../App.css'

export default class LaBanda extends Component {

    render() {

        return (

            <section className="page-section pt-5" id="labanda">
                <div className="container pt-5">
                    <div className="text-center pt-5">
                        <h2 className="section-heading text-uppercase mb-4 pt-5">LA BANDA</h2>
                        <h4 class="text-muted"> Escuchanos en </h4>

                    </div>
                    <div className="row pt-3 d-flex justify-content-center text-center">
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-icon"></i>
                                <i className="fab fa-spotify fa-stack-1x fa-inverse"></i>


                            </span>
                            <h4 className="my-3 title-labanda">Spotify</h4>

                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-icon1"></i>
                                <i className="fab fa-soundcloud fa-stack-1x fa-inverse"></i>


                            </span>
                            <h4 className="my-3 title-labanda">SoundCloud</h4>

                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-icon2"></i>
                                <i className="fab fa-youtube fa-stack-1x fa-inverse"></i>


                            </span>
                            <h4 className="mt-3 title-labanda">YouTube</h4>

                        </div>
                    </div>

                    <div className="row pt-5 text-center d-flex justify-content-center ">

                        <div className="col-11">

                            <p>Velvet Revolver es una banda tributo argentina de hard rock formada en Burzaco en la 
                                zona Sur de Buenos Aires en 1985. El grupo fue fundado por el vocalista Axel Rosales y 
                                el guitarrista Pedro, el "Slash" argentino, como tributo​ a la exitosa banda estadounidense</p>

                            <p>Es una de las bandas de rock tributo más exitosas de todos los tiempos, habiendo vendido 
                                más de ciento cincuenta millones de discos, es considerada ícono global de la música 
                                y forma parte del prestigioso Salón de la Fama del Rock and Roll. Asimismo, la banda es 
                                uno de los números artísticos con más galardones, legado y repercusión mundial hasta la 
                                fecha. También Velvet Revolver es considerada una de las bandas más influyentes de la historia 
                                debido a su gran legado musical</p>
                                
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}