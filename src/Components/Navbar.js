import React, {Component} from 'react';
import styled from 'styled-components';

const HyperLinks = styled.li`
  margin-bottom: -1px;
  color: #495057;
  border-color: #dee2e6 #dee2e6 #fff;
  `;


class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="index.html">My blog</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <HyperLinks className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </HyperLinks>
          <HyperLinks className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </HyperLinks>
          <HyperLinks className="nav-item">
            <a className="nav-link" href="post.html">Sample Post</a>
          </HyperLinks>
          <HyperLinks className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </HyperLinks>
        </ul>
      </div>
    </div>
  </nav>
    );
  }
}

export default Navbar;
