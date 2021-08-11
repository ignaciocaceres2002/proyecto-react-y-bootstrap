import React, { Component } from 'react'
import '../App.css'
import {Button, Modal, Nav} from "react-bootstrap"
import Web3 from "web3";
const web3 = new Web3();
const cantidad = '13000';

        
export default class ModalCompra extends Component {

    constructor()
    {
        super()
        this.state = {
            show: false
        }
    }

   

    Connect() {

        var Web3 = require('web3');
        var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

        let web3_provider;
        
        if (window.ethereum) {
            web3_provider = window.ethereum.enable();
            console.log(window.ethereum);
        } else {
            alert("Descargue MetaMask");
        }

    
        window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: "0x37d490F11f49Be7704Cb3320a0E918aC045cb65A",
                to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              },
            ],
          }).then(r=>console.log(r)).catch(e=>console.log(e))
   
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
                                
                                
                                
                                    
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={() => {this.Connect()}}>
                                    Comprar
                                </Button>

                                <Button onClick={() => {this.handleModal()}}>
                                    Cerrar
                                </Button>
                                
                                </Modal.Footer>
                            </Modal>
                        
                       
        </div>
        )
    }
}