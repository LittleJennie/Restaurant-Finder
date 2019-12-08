import React from 'react';
import mapKey from '../../mapKey';

class Map extends React.Component{
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      map: null,
      markers: [],
    };

    this.loadGoogleMapScript = this.loadGoogleMapScript.bind(this);
    this.initMap = this.initMap.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
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
    const map = new window.google.maps.Map(this.googleMapRef.current, {
      center: {lat: 43.642567, lng: -79.387054},
      zoom: 11,
    });
    this.setState({ map });
  }

  createMarker(position, name) {
    const { map } = this.state;
    return new window.google.maps.Marker({ position, map, title: name });
  }

  renderMarkers(restaurants) {
    if (this.state.map && restaurants.length !== 0) {
      const markers = [];
      let maxLng = -180;
      let minLng = 180;
      let maxLat = -90;
      let minLat = 90;

      for (let i = 0; i < restaurants.length; i ++) {
        const { latitude, longitude } = restaurants[i].coordinates;
        maxLat = Math.max(maxLat, latitude);
        minLat = Math.min(minLat, latitude);
        maxLng = Math.max(maxLng, longitude);
        minLng = Math.min(minLng, longitude);
        const marker = this.createMarker({
          lat: latitude,
          lng: longitude,
        }, restaurants[i].name);
        // marker.addListener('click', () => {

        // })

        markers.push(marker);
      }

      this.state.map.setCenter({
        lat: (maxLat + minLat) / 2,
        lng: (maxLng + minLng) / 2,
      });
      this.setState({ markers });
    }
  }

  clearMarkers() {
    this.setState({
      markers: [],
    })
  }

  componentDidUpdate() {
    console.log('updated')
    this.renderMarkers(this.props.restaurants);
  }

  render() {
    // this.clearMarkers();
    // this.renderMarkers(this.props.restaurants);
    console.log(this.props.restaurants)

    return (
      <div
        id="map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '300px' }}
      >
]      </div>
    );
  }
};

export default Map;
