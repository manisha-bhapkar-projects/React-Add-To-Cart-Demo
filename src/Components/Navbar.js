import React, {Component , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getNumbers } from '../actions/getAction';



function Navbar(props) {
    useEffect(() => {
        getNumbers();
  }, [])
    

    return (
      <div>
       <div className="container">
                    <img src={window.location.origin + "/img/logo.jpg"} className="nav_img"/>
              </div>
         <nav className="navbar navbar-light container nav" style={{backgroundColor: "#e3f2fd"}}>
             <table>
                 <tr >
                 <Link to="/packaging">
                       <th className="step step1">STEP 1</th>
                 </Link> 
                 <Link to="/giftList">
                        <th className="step">STEP 2</th>
                 </Link> 
                 <Link to="/keychain">
                        <th className="step">STEP 3</th>
                 </Link>
                 <Link to="/cart">
                        <th className="step">Cart [{props.basketProps.basketNumbers}]</th>
                 </Link>
                 </tr>
              </table>
        </nav>
        
           
      </div>
        );
      }
      
    
   
  const mapStateToProps = state => ({
            basketProps: state.basketState
  })

  export default connect(mapStateToProps, { getNumbers }) ( Navbar );
