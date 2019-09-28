import React from 'react';
import mapKey from '../../mapKey';

class Map extends React.Component{
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.loadGoogleMapScript = this.loadGoogleMapScript.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }

  loadGoogleMapScript(url) {
    const index = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index)
  }

  renderMap() {
    this.loadGoogleMapScript(`https://maps.googleapis.com/maps/api/js?key=${this.props.mapKey}&callback=initMap`);
    window.initMap = this.initMap;
  }

  initMap() {
    console.log('key ', this.props.mapKey)
    new window.google.maps.Map(this.googleMapRef.current, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    })
  }

  createMarker() {
    new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: this.googleMap,
    })    
  }

  render() {
    return (
      <div
        id="map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '300px' }}
      />
    )
  }
};

export default Map;
