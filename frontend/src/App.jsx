import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"));
const WorkshopsPage = lazy(() => import("./pages/WorkshopsPage"));
const StatsPage = lazy(() => import("./pages/StatsPage"));

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main" id="main-content" tabIndex="-1">
        <Suspense fallback={<LoadingSpinner label="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
