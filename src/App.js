import "./App.css";
import MapComponent from "./components/Map";
import MarkerPopupMap from "./components/MarkerPopupMap";
import VectorLayerMap from "./components/VectorLayerMap";
import React from "react";

function App() {
  return (
    <div>
      {/* Other components */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <VectorLayerMap />
      </React.Suspense>
    </div>
  );
}

export default App;
