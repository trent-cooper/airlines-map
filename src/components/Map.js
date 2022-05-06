import React from "react";

const Map = ({ routes, format }) => {

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        
        {routes.map(route => {
          const { lat: y1, long: x1 } = format(route.src)
          const { lat: y2, long: x2 } = format(route.dest)

          return (
            <g key={route.src + route.dest + route.airline}>
              <circle className="source" cx={x1} cy={y1}>
                <title></title>
              </circle> 
              <circle className="destination" cx={x2} cy={y2}>
                <title></title>
              </circle>
              <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
            </g>
          )
        })}
        
      </g>
    </svg>
  )
}

export default Map