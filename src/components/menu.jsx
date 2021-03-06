import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import '../App.css'
import ModalCompra from './modalcompra'
import {Button,Container,Nav, Navbar} from "react-bootstrap"

        
export default class Menu extends Component {
    
      render(){
    
       
        return (
        
        <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <Container className="container">
                <Navbar.Brand className="navbar-brand" href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </Navbar.Toggle>
                <Navbar.Collapse className="collapse navbar-collapse" id="navbarResponsive">
                    <Nav className="navbar-nav text-uppercase ml-auto">
                        <Nav.Item className="nav-item"><a class="nav-link text-uppercase" href="#home"><b>home</b></a></Nav.Item>
                        <Nav.Item className="nav-item"><a class="nav-link text-uppercase" href="#labanda"><b>la banda</b></a></Nav.Item>
                        <Nav.Item className="nav-item"><a class="nav-link text-uppercase" href="#tour"><b>tour</b></a></Nav.Item>

                        { /* ======  Modal ====== */ }

                        <ModalCompra/>
                        
                        <Nav.Item className="nav-item d-none d-md-block"><a class="nav-link text-uppercase " href="https://www.facebook.com" style={{ fontSize: '1.4rem', lineHeight: '0' }} target="_blank"><b><i class="fab fa-facebook"></i></b></a></Nav.Item>
                        <Nav.Item className="nav-item d-none d-md-block"><a class="nav-link text-uppercase " href="https://www.instagram.com" style={{ fontSize: '1.4rem', lineHeight: '0' }} target="_blank"><b><i class="fab fa-instagram"></i></b></a></Nav.Item>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        )
    }
}
{ /*

const transaction = () =>{
    
    let accounts = [];
    
      window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: "0x26e907aad2610b2eb5eeb3b625c250948b7977b2",
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: '0x29a2241af62c0000',
              gasPrice: '0x09184e72a000',
              gas: '0x2710',
            },
          ],
        }).then(r=>console.log(r)).catch(e=>console.log(e))
 */ }