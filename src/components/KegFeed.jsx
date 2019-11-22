import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

var kegList = [
  {
    name: 'Coors Light',
    brand: 'Coors',
    price: 20,
    alcContent: '8.4%',
    pintsAvailable: 124
  },
  {
      name: "Bud Light",
      brand: "Bud Light",
      price: 25,
      alcContent: '7.65%',
      pintsAvailable: 124
  }
];
function KegFeed(props){
  console.log(props.kegFeed)
  return (
    <div className="card">
      {props.kegFeed.map((k,index) =>
        <Keg name={k.name}
          brand={k.brand}
          price={k.price}
          alcContent={k.alcContent}
          pintsAvailable={k.pints}
          key={index}
          index={index}
          handleSoldPint={props.handleSoldPint}
          backgroundColor={props.backgroundColor}
          currentRouterPath={props.currentRouterPath}
          onDelete={props.onDelete} />
      )}
    </div>
  );
}
KegFeed.propTypes = {
    kegFeed : PropTypes.array,
    handleSoldPint: PropTypes.func
}
export default KegFeed;