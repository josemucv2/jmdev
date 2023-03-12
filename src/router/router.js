import React from "react";
import route from "./route";

import { Route, Routes } from "react-router-dom";

console.log(route, "route");

function Router() {
  return (
    <Routes>
      {route.map((element, index) => {
        return (
          <Route
            path={element.path}
            element={<element.component />}
            key={index}
          />
        );
      })}
    </Routes>
  );
}

export default Router;
