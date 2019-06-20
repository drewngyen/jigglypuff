import React, { Component } from 'react';
import Header from './Header';
import MainDisplay from '../components/MainDisplay'
import Footer from '../components/Footer'
import PurchaseModal from './PurcasheModal';
import AddProduct from './AddProduct';
import UserCatalog from './UserCatalog';
import Cart from './Cart';
import { connect } from "react-redux";
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{
  constructor(){
    super();
  }
  //Make fetch call to api/current_user, and update state if it returns current user id
  componentDidMount(){
    console.log('Requesting user id from server');
    fetch('/api/current_user', {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('Response', data);
        this.props.addUser(data);
      }).catch(err => {
        console.log(`error response: ${err}`);
      }); 
  }

  render(){
    return (
      <Router>
        <div>
          <Header />
          <Link to="/">Store</Link>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/myproducts">My Products</Link>
  
          {this.props.onCheckoutPage && <PurchaseModal />}
  
          <Route exact path="/" component={MainDisplay} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/myproducts" component={UserCatalog} />
  
        </div>
      </Router>
    );
  }
}
const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage,
})

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  addUser: userId => dispatch(actions.addUser(userId))
})
=======
//wire-up Router in here
function App({ onCheckoutPage }) {
  return (
    <Router>
      <div>
        <Header />
        <Link to="/">Store</Link>
        <Link to="/addproduct">Sell an Item</Link>
        <Link to="/myproducts">My Products</Link>
        <Link to="/cart">Cart</Link>

        {onCheckoutPage && <PurchaseModal />}

        <Route exact path="/" component={MainDisplay} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/myproducts" component={UserCatalog} />
        <Route path="/cart" component={Cart} />

        <Footer />
      </div>
    </Router>
  );
}
>>>>>>> e8b7f6ed61ea6c7efefeb41ae1d0ee06c481527b

export default connect(mapStateToProps, mapDispatchToProps)(App);

