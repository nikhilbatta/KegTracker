import React from 'react';
import Keg from './Keg';

var kegList = [
  {
    name: 'Coors Light',
    brand: 'Coors',
    price: 20,
    alcContent: '8.4%'
  },
  {
      name: "Bud Light",
      brand: "Bud Light",
      price: 25,
      alcContent: '7.65%'
  }
];
function KegFeed(){
  return (
    <div>
      {kegList.map((k,index) =>
        <Keg name={k.name}
          brand={k.brand}
          price={k.price}
          alcContent={k.alcContent}
          key={index} />
      )}
    </div>
  );
}
export default KegFeed;