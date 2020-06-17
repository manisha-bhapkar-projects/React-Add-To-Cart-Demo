import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Gift_List from './Components/Gift_List';
import Cart from './Components/Cart';
import Packaging from './Components/Packaging';
import Keychain from './Components/Keychain';
import { Provider } from 'react-redux';
import store from './store';




class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <React.Fragment>
         <Switch>
           <Route exact path="/" component={Packaging}/>
           <Route exact path="/packaging" component={Packaging}/>
           <Route path="/giftList" component={Gift_List}/>
           <Route path="/cart" component={Cart}/>
           <Route path="/keychain" component={Keychain}/>

          </Switch>
      </React.Fragment>
      </Provider>
      );
    }
    
  }
  
export default App;
