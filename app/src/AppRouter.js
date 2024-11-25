import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function AppRouter({ data }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
      </Routes>
    </>
  );
}

export default AppRouter;
