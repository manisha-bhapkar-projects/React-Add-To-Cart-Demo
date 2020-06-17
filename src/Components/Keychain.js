import React, {Component} from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



class Keychain extends Component {
    render(){
      return (
        <div>
                 <Navbar/>
             <div className="d-flex justify-content-center m-3">
                <h6>Create Your Piece of Heaven!!</h6>
             </div>

             <div className="container ">
          <div className="row">
              <div className="col-md-6">
                   <Link to="/cart">
                       <img src={window.location.origin + "/img/sticker.jpg"} className="img1"></img>
                       <div className="d-flex justify-content-center">Sticker-1</div>
                   </Link>  
              </div>
              <div className="col-md-6">
              <Link to="/cart">
                    <img src={window.location.origin + "/img/sticker2.jpg"}  className="img1"/>
                    <div className="d-flex justify-content-center">Sticker-2</div>
               </Link>  

              </div>
          </div>
          </div>

     </div>
        );
      }
      
    }
    
  export default Keychain;