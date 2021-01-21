import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 3.473385,
    lng: -73.85855,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9P7_PAbUmkhx82p_npt0NW20gZgUCxzw">
      <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
