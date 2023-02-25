//implementation of d3 library
import "../css/Marks.css"
import { geoEqualEarth, geoPath } from 'd3';
const projection = geoEqualEarth();
const path = geoPath(projection);
export const Marks = ({
  data : {countries, interiors}
}) => (
  <g className="marks">
    {/* displays the border of map  */}
    <path className="sphere" d={path({type: "Sphere"})} />
    {
      // displays the world map
      countries.features.map(feature => (
        <path className="countries" d={path(feature)} />
      ))
    }
{/* displays the border between countries */}
    <path className="interiors" d={path(interiors)} />
    
  </g>
);