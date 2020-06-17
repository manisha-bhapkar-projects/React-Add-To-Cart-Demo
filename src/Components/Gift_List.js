import React, {Component} from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';



const Gift_List = (props) => {

  return (
        <div>
          <Navbar/>
          <div className="d-flex justify-content-center m-3">
             <h6>Choose Your Gifts</h6>
          </div>

          {/* <div  className="d-flex justify-content-center m-3">filter</div> */}

          <div className="d-flex justify-content-center row">
                <div  className="col-md-3 images">
                    <img src={window.location.origin + "/img/t4.jpg"} className="gifts"></img>
                    <div class="caption">
                            <p>Yellow Teddy...</p>
                            <h6>$15,00</h6>
                            <a onClick={() => props.addBasket('YellowTeddy')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/t2.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Pink Teddy...</p>
                            <h6>$25,00</h6>
                            <a onClick={() => props.addBasket('PinkTeddy')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/t3.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>White Teddy...</p>
                            <h6>$10,00</h6>
                            <a onClick={() => props.addBasket('WhiteTeddy')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
          </div>

          <div className="d-flex justify-content-center row r1">
                <div  className="col-md-3 images">
                    <img src={window.location.origin + "/img/f1.jpg"} className="gifts"></img>
                    <div class="caption">
                            <p>Mix Roses Bucky...</p>
                            <h6>$45,00</h6>
                            <a onClick={() => props.addBasket('MixRosesBucky1')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/f2.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Mix Roses Bucky...</p>
                            <h6>$35,00</h6>
                            <a onClick={() => props.addBasket('MixRosesBucky2')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/f3.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Yellow Roses Bucky...</p>
                            <h6>$25,00</h6>
                            <a onClick={() => props.addBasket('YellowRosesBucky')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
          </div>


          <div className="d-flex justify-content-center row r1">
                <div  className="col-md-3 images">
                    <img src={window.location.origin + "/img/d1.jpg"} className="gifts"></img>
                    <div class="caption">
                            <p>Red Doll Keychain...</p>
                            <h6>$15,00</h6>
                            <a onClick={() => props.addBasket('RedDollKeychain')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/d2.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Pink Doll Keychain...</p>
                            <h6>$10,00</h6>
                            <a onClick={() => props.addBasket('PinkDollKeychain')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/d3.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Doll Keychain...</p>
                            <h6>$35,00</h6>
                            <a onClick={() => props.addBasket('DollKeychain')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
          </div>

          <div className="d-flex justify-content-center row r1">
                <div  className="col-md-3 images">
                    <img src={window.location.origin + "/img/f4.jpg"} className="gifts"></img>
                    <div class="caption">
                            <p>Mix Flowers Bucky...</p>
                            <h6>$25,00</h6>
                            <a onClick={() => props.addBasket('MixFlowersBucky3')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/f5.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Mix Flowers Bucky...</p>
                            <h6>$35,00</h6>
                            <a onClick={() => props.addBasket('MixFlowersBucky4')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
                <div  className="col-md-3 images">
                      <img src={window.location.origin + "/img/f6.jpg"} className="gifts"></img>
                      <div class="caption">
                            <p>Mix Flowers Bucky...</p>
                            <h6>$25,00</h6>
                            <a onClick={() => props.addBasket('MixFlowersBucky5')} className="addToCart cart" href="#">Add To Cart</a>
                    </div>
                </div>
          </div>


        </div>
        );
      }
      
    
    
  export default connect(null, { addBasket }) (Gift_List);