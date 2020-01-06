import React from 'react'

const MapArea = ({ mapName }) => {
  return (
    // { map === ''}
    <map name="map1">
      <area shape="rect" coords="0 0 100 200" alt={`${mapName} map`} href="sun.htm"></area>
    </map>
  )
}

export default MapArea
