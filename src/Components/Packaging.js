import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



class Packaging extends Component {
    render(){
      return (
        <div>
         <Navbar />

      <div className="d-flex justify-content-center m-3">
             <h6>Select A Box</h6>
         </div>
         <div className="d-flex justify-content-center "> 
         <small>Choose a Packaging that speaks to your loved one's style!!</small></div>
         <div className="container ">
          <div className="row">
              <div className="col-md-6">
                   <Link to="/giftList">
                       <img src={window.location.origin + "/img/white.jpg"} className="img1"></img>
                       <div className="d-flex justify-content-center">White</div>
                   </Link>  
              </div>
              <div className="col-md-6">
              <Link to="/giftList">
                    <img src={window.location.origin + "/img/pink.jpg"}  className="img1"/>
                    <div className="d-flex justify-content-center">Pink</div>
               </Link>  

              </div>
          </div>
          </div>

     </div>
        );
      }
      
    }
    
  export default Packaging;