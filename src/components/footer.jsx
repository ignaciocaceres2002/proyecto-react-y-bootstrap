import React, { Component } from 'react'
import '../App.css'

export default class Footer extends Component {

    render() {

        return (

            <footer id="footer" className="text-sm-left back-footer">
            <div className="container pt-4 py-sm-5">

                <div className="row py-sm-5 py-3 d-flex justify-content-center align-items-center">



                    <div className="col-12">
                        <div className="map mb-4 mb-md-0">
                            <h2 className="section-heading text-uppercase mb-5">proxima presentacion en</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.030792131669!2d-58.38105528519531!3d-34.60338286498643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaceed5746b9%3A0xf933ab84305babc0!2sTeatro%20Gran%20Rex!5e0!3m2!1ses-419!2sar!4v1626147496977!5m2!1ses-419!2sar" 
                            width="100%" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                            
                        </div>
                    </div>


                </div>

                <hr style={{ color: '#fff' }} />
                <div className="d-flex justify-content-center pt-lg-5   footer-bottom-cpy">
                    <div className="cpy-right text-center">
                        <p>© Velvet Revolver Tributo. Todos los derechos reservados | Juan Ignacio Cáceres 2021</p>
                    </div>

                </div>
            </div>
        </footer>

        )
    }
}