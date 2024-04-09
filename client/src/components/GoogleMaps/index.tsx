"use client";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { APIProvider, Map } from "@vis.gl/react-google-maps";

// export const GoogleMaps = () => (
//   <APIProvider apiKey={"AIzaSyBL9rc48p-BO9lSkvBNdp-UD7e3SiGoT9w"}>
//     <Map
//       style={{ width: "300px", height: "300px" }}
//       defaultCenter={{ lat: 22.54992, lng: 0 }}
//       defaultZoom={3}
//       gestureHandling={"greedy"}
//       disableDefaultUI={true}
//     />
//   </APIProvider>
// );
// const rootElement = document.querySelector("#hotels");
// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <GoogleMaps />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element '#hotels' not found in the DOM.");
// }

import React, { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

export const GoogleMaps = () => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{ lat: 28, lng: -82 }}
        title={"AdvancedMarker that opens an Infowindow when clicked."}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          This is an example for the{" "}
          <code style={{ whiteSpace: "nowrap" }}>&lt;AdvancedMarker /&gt;</code>{" "}
          combined with an Infowindow.
        </InfoWindow>
      )}
    </>
  );
};
