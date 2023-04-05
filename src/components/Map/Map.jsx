import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { modalSelectors } from 'redux/modal/modalSelectors';

const NewMap = () => {
  const isOnlyMobile = useMediaQuery({ minWidth: 320 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const location = useSelector(modalSelectors.getLocation);
  const { latitude, longitude } = location;
  console.log(location);
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={false}
      style={
        (isTablet && { width: '400px', height: '400px', marginTop: '20px' }) ||
        (isOnlyMobile && {
          width: '280px',
          height: '280px',
          marginTop: '20px',
        })
      }
    >
      <TileLayer
        attribution="Buzanov"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default NewMap;
