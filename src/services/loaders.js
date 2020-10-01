import React from "react";
import loading from "./loading.svg"
import textLoading from "./textLoading.svg"

export function PageLoader() {
  return (
    <img
      className="loading-img"
      src={loading}
      alt="Loading page"
    />
  );
}

export function TextLoader() {
  return (
    <img
      src={textLoading}
      alt="Loading text"
      className="loading-txt"
    />
  );
}
