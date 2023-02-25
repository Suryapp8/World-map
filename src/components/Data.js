import React from 'react';
import { UseData } from './UseData';
import { Marks } from './Marks';
import "../css/Data.css"

const width = 960;
const height = 500;

export default function Data()  {
  const data = UseData();

  if (!data) {
    return <pre>Loading...</pre>;
  }
//using svg to render the map from Marks.js
  return (
    <svg className='svg' width={width} height={height}>
      <div class="hexagon"
        id="hexagon">
    </div>
        <Marks
          data={data}
        />
    </svg>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

