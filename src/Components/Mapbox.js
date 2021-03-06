import React, { Component } from 'react';
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css"

const token = 'pk.eyJ1IjoiYW5vbmp1aWNlIiwiYSI6ImNrMDZ6YmR6aTQ2a20zYm1scDk5d3Vpb3AifQ.KWmwgregbqf9IdA07pn-Ow'

class Mapbox extends Component {
  state = { 
    viewport :{
      latitude: 45.556651,
      longitude: -122.916754,
      zoom: 17
    }
   }

   mapRef = React.createRef()

   handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }


   

  render() { 
    const {viewport} = this.state
    
    return ( 
      <div className='map-comp'>
          <MapGL 
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/anonjuice/ck07526jq00301cmk89tty6we"
            width="100%"
            height="100%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            >
            </MapGL>
        </div>
      )
    }
}
  
 
export default Mapbox;