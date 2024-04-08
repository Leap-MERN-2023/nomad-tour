"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMaps = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: " AIzaSyBL9rc48p-BO9lSkvBNdp-UD7e3SiGoT9w",
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      //init marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 47.9221,
        lng: 106.9155,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 12,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "300px", width: "310px", borderRadius: "10px" }}
    />
  );
};

export default GoogleMaps;
