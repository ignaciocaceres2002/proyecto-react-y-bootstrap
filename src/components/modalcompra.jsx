import React, { Component } from 'react'
import '../App.css'
import {Button, Modal, Nav} from "react-bootstrap"


        
export default class ModalCompra extends Component {

    constructor()
    {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({show: !this.state.show})
    }

    
      render(){
    
       
        return (
                        
            <div>
                       
                    <Nav.Item className="nav-item " onClick={() => {this.handleModal()}}  ><div className="btn btn-secondary"  ><a class="nav-link text-uppercase" ><b>comprar</b></a></div></Nav.Item>


                            <Modal show={this.state.show} >
                                <Modal.Header closeButton onHide={() => this.handleModal()}>
                                    <Modal.Title>COMPRAR</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* ============================================= */}
                                    {/* ============================================= */}
                                    {/* ============================================= */}
                                    {/* ========== conexion a la billetera ========== */}
                                    {/* ============================================= */}
                                    {/* ============================================= */}
                                    {/* ============================================= */}
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={() => {this.handleModal()}}>
                                    Cerrar
                                </Button>
                                
                                </Modal.Footer>
                            </Modal>
                        
                       
        </div>
        )
    }
}