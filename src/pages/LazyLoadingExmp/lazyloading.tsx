import React, { Suspense, useState } from "react";

const TableComp = React.lazy(() => import("../Tables/table01"));
const GoogleMapExample = React.lazy(() => import("../GoogleMaps/map01"));

const LazyloadingExample = () => {
  const [showMap, setShowMap] = useState(false);
  const handleLoadComponent = () => {
    setShowMap(true);
  };
  return (
    <div>
      <h2>Lazy Loading Example</h2>
      <button onClick={handleLoadComponent}>Load Another Component</button>
      <Suspense fallback={<p>... Loading</p>}>
        <TableComp />
      </Suspense>
      {showMap && (
        <Suspense fallback={<p>... Loading Google Map</p>}>
          <GoogleMapExample />
        </Suspense>
      )}
    </div>
  );
};

export default LazyloadingExample;
