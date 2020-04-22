import React from 'react';
import Child from "./Child";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Promotions from "./Promotions";
import  CounterWithHooks  from "./CounterWithHooks";
import Cart from './cart';
import PromotionsWithHooks from "./PromotionsWithHooks";


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <PromotionsWithHooks></PromotionsWithHooks>
        <Promotions></Promotions>
        {/* <Promotions></Promotions> */}
        <CounterWithHooks></CounterWithHooks>
        <Child size={2} color={'green'}></Child>
        <Child size={2} color={'green'}></Child>
        {/* <Child size={3} color={'red'}></Child> */}
        {/* <Child size={3} ></Child> */}
        <h1>  ! Am class class component</h1>
        <Cart  product = {{name:'Nike',discountper:0,price:500,qty:1,src:'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png'}}/>
      </div>
    )
  }
}


export default App;
