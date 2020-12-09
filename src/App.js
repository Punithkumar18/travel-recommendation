import React, { useState } from "react";
import "./styles.css";

const places = {
  HillStations: [
    { name: "Leh Ladakh", rating: "4.5/5" },
    { name: "Nainital", rating: "4.6/5" },
    { name: "Manali", rating: "4.3/5" }
  ],
  BackWaters: [
    { name: "Allepey", rating: "4.1/5" },
    { name: "Kasargod", rating: "4.0/5" },
    { name: "Kozhikode", rating: "4.3/5" }
  ],
  SnowFall: [
    { name: "Gulmarg", rating: "4.1/5" },
    { name: "Auli", rating: "4.5/5" },
    { name: "Sonmarg", rating: "4.3/5" }
  ],
  Desert: [
    { name: "Jaisalmer", rating: "4.5/5" },
    { name: "Kutch", rating: "4.0/5" },
    { name: "Bikaner", rating: "4.1/5" }
  ]
};

export default function App() {
  var [selectedPlace, setPlace] = useState("HillStations");
  function placeClickHandler(place) {
    setPlace(place);
  }

  return (
    <div className="App">
      <h1> 🏔️ Travel Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Some of the Beautiful Places for Your next holiday{" "}
      </p>

      <div>
        {Object.keys(places).map((place) => (
          <button
            onClick={() => placeClickHandler(place)}
            style={{
              cursor: "pointer",
              background: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {place}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {places[selectedPlace].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{place.name}</div>
              <div style={{ fontSize: "smaller" }}>{place.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
