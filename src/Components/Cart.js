import React, {Component, Fragment} from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import img12 from '../Images/t4.jpg';
import img11 from '../Images/t3.jpg';
import img10 from '../Images/t2.jpg';

import img1 from '../Images/f1.jpg';
import img2 from '../Images/f2.jpg';
import img3 from '../Images/f3.jpg';
import img7 from '../Images/d1.jpg';
import img8 from '../Images/d2.jpg';

import img9 from '../Images/d3.jpg';

import img4 from '../Images/f4.jpg';
import img5 from '../Images/f5.jpg';
import img6 from '../Images/f6.jpg';


function Cart({basketProps}){
    // console.log(basketProps);
    let productsInCart = [];
    Object.keys(basketProps.products).forEach(function(item){
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
    })

    const productImages = [img12, img10, img11, img1, img2, img3, img7, img8, img9, img4, img5, img6];

    productsInCart = productsInCart.map((product, index) => {
        return(
            <React.Fragment>
                <div className="product">
                    <img src={productImages[index]}/>  
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="sm-hide price">${product.price}</div>
                <div className="quantity">
                        <span>{product.numbers}</span>
                </div>
                <div className="total">{product.numbers * product.price}</div> 
            </React.Fragment>
        )
    });
      return (
        <div>
             <Navbar/>

            <div className="container-products">
                    <div className="product-header">
                         <h6 className="product-title">Product</h6>
                         <h6 className="price sm-hide">Price</h6>
                         <h6 className="quantity">Quantity</h6>
                    </div>
                    <div className="products">
                        { productsInCart }
                    </div>
                    <div className="basketTotalContainer">
                        <h6 className="basketTotalTitle">Basket Total</h6>
                        <h6 className="basketTotal">${basketProps.cartCost}</h6>
                    </div>
            </div>
        </div>
     
        );
      }
      
    const mapStateToProps = state => ({
        basketProps: state.basketState
     }) ;

  export default connect(mapStateToProps) (Cart);
