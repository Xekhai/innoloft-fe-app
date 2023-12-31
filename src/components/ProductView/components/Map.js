import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the marker not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = ({product}) => {
  const position = [parseFloat(product.company.address.latitude), parseFloat(product.company.address.longitude)];

  return (
    <MapContainer center={position} scrollWheelZoom={false} zoom={13} style={{ height: "500px", width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {product.company.name} <br />
          {product.company.address.street} {product.company.address.house}, <br />
          {product.company.address.zipCode} {product.company.address.city.name}, <br />
          {product.company.address.country.name}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;
