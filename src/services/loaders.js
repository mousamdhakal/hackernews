import React from "react";

export function PageLoader() {
  return (
    <img
      className="loading-img"
      src="./assets/images/loading.svg"
      alt="Loading page"
    />
  );
}

export function TextLoader() {
  return (
    <img
      src="./assets/images/text-loading.svg"
      alt="Loading text"
      className="loading-txt"
    />
  );
}
