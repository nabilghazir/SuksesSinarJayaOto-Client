import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const DESIGNATED_LOCATION = { lat: -6.352185, lng: 106.862451 };
const LOCATION_ADDRESS =
  "Bengkel Mobil Mengerjakan Diesel & Bensin, Jakarta, Indonesia";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Bengkel+Mobil+Mengerjakan+Diesel+%26+Bensin/@-6.352185,106.862451,21z/data=!4m6!3m5!1s0x2e69ec58e356ad5f:0xca86043dcf645825!8m2!3d-6.3521882!4d106.8624356!16s%2Fg%2F11krkg3y62?hl=id&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D";

const ClickHandler = () => {
  useMapEvent("click", () => {
    window.open(GOOGLE_MAPS_URL, "_blank");
  });
  return null;
};

export const PinPoint = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <MapContainer
        center={DESIGNATED_LOCATION}
        zoom={18}
        style={{
          height: isMediumScreen ? "250px" : "500px",
          width: isMediumScreen ? "400px" : "800px",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler />
        <Marker position={DESIGNATED_LOCATION} icon={customIcon}>
          <Popup>{LOCATION_ADDRESS}</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};



