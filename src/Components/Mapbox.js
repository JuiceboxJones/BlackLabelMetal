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
    },
    searchResultLayer: null
   }

   mapRef = React.createRef()

   handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }
   

  render() { 
    const {viewport, searchResultLayer} = this.state
    
    return ( 
      <div className='map-comp'>
          <MapGL 
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/anonjuice/ck07526jq00301cmk89tty6we"
            width="80%"
            height="80%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            >
            </MapGL>
            <DeckGL {...viewport} layers={[searchResultLayer]} />
        </div>
      )
    }
}
  
 
export default Mapbox;