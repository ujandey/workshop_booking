import React from "react";

function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="loading-wrap" role="status" aria-live="polite" aria-label={label}>
      <div className="spinner" />
      <span>{label}</span>
    </div>
  );
}

export default LoadingSpinner;
