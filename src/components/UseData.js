import  { useState, useEffect } from 'react';
import { json } from 'd3';

// using topojson for efficiently represent both polygons (for fill) and boundaries (for stroke)
import {feature, mesh} from "topojson"
const jsonUrl =
  'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const UseData = () => {
  const [data, setData] = useState(null);
  console.log(data)
  //converting data from topojson to geojson
  useEffect(() => {
    json(jsonUrl).then(topology =>{
      const {countries} = topology.objects
      setData({
        countries: feature(topology, countries),
        interiors : mesh(topology, countries, function(a, b)  { return a !== b} )
      })
    });
  }, []);
  
  return data;
};