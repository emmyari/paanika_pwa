import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import Category from "./categories/categories";
import CheckoutPage from "./checkout/checkout.component"
import OrderConfirmPage from "./orderconfirmpage/OrderConfirmPage"
import SignInAndSignUpPage from "./signinsignup/sign-in-and-sign-up.component";
import { useSelector} from "react-redux";
import React, { Component } from 'react';
import Refund from "./refund/Refund";


function App(props) {
  const state = useSelector((state) => state);
  return (
    <Template>
      <Switch>
        <Route path="/category/:slug" exact>
          <Category />
        </Route>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/order" exact>
          <OrderConfirmPage />
        </Route>
        <Route
            exact
            path="/signin"
            render={() =>
              state.user.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/toc">
            <Refund />
          </Route>
      </Switch>
    </Template>
  );
}

export default App;
