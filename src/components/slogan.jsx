import React, { Component } from 'react'
import '../App.css'
import imgSlogan from "../assets/img/about/slogan.jpg"

export default class Slogan extends Component {

    render() {

        return (
          <div> 
          <div className="curved-div upper">
          <svg viewBox="0 0 1440 319">
                <path fill="#542f2f" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
          </div>
          
            <div className="curved-div ">
              
              <div className="container">
                <div className="row pb-5 d-flex justify-content-center align-items-center">
                  <div className="col-4 d-none d-md-block">
                    <img src={imgSlogan}  style={{borderRadius: '50%'}} width="80%" alt="" />
                  </div> 

                  <div className="col-8 " style={{textAlign:'left'}}>
                    <h1 style={{lineHeight: '0.8em'}} className="mb-4">Disfrutá de buena música</h1>
                    <p style={{fontFamily: "'Pacifico', cursive", fontSize: '1.7rem'}}>
                      Comprá en <a href="https://www.ticketek.com.ar/" target="_blank" style={{color: '#e4cdcd'}}>nuestra tienda</a> las entradas para el proximo evento y disfrutá del mejor tributo al rock internacional 
                    </p>
                  </div>  

                </div>
              </div>
            

              

              <svg viewBox="0 0 1440 319">
                <path fill="#fff" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

            </div>

</div>

        )
    }
}