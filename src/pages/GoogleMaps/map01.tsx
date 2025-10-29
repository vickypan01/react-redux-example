import "../../index.css";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const center = {
  lat: 28.49615,
  lng: 77.53601,
};

const GoogleMap01: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) {
    return <h2>Loading ... Google Map</h2>;
  }
  return (
    <div>
      <h1 className="display-6">Google Map</h1>
      <div className="g-map">
        <GoogleMap
          center={center}
          zoom={10}
          onLoad={() => {}}
          onUnmount={() => {}}
          mapContainerClassName="g-map"
        />
      </div>
    </div>
  );
};

export default GoogleMap01;
