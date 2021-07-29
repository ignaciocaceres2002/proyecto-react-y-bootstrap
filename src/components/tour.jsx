import React, { Component } from 'react'
import '../App.css'
import earth from "../assets/img/earth.png"

export default class Tour extends Component {

    render() {

        return (

            <section className="page-section pt-5 back-tour" id="tour">
            <div className="container  py-5">

                <div className="text-center pt-5">
                    <h2 className="section-heading text-uppercase mt-4 " >tour</h2>
                    <h4 class="text-muted mb-5"> Encontranos en </h4>
                </div>
                <div className="row d-flex justify-content-around">

                <div className="col-11 col-md-5 mb-5 ">
                    <img src={earth} width="100%" alt="" />
                </div>
                    <div className="col-11 col-md-7 mb-5 d-flex justify-content-center list-tour">
                        <ul style={{ fontSize: '1.5em', listStyle: 'none'}}>
                            <li>20/07 <span style={{color: '#a32c2c'}}>|</span> Gran Rex</li>
                            <li>22/07 <span style={{color: '#a32c2c'}}>|</span> Hipodromo de Palermo</li>
                            <li>29/07 <span style={{color: '#a32c2c'}}>|</span> Estadio Presidente Perón</li>
                            <li>03/08 <span style={{color: '#a32c2c'}}>|</span> Little John's Bar</li>
                            <li>07/08 <span style={{color: '#a32c2c'}}>|</span> El Piave de Avellaneda</li>
                            <li>15/08 <span style={{color: '#a32c2c'}}>|</span> Luna Park</li>

                        </ul>
                    </div>
                </div>


            </div>
        </section>

        )
    }
}