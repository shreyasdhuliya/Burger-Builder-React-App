import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from  './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div >
      <Layout >
         <Switch>
          <Route path="/checkout" component={CheckOut} />
          <Route path ="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />

         </Switch>
        </Layout>

             
       
      
    </div>
  );
}

export default App;
