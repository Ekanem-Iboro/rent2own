// src/components/Loader.tsx
import React from "react";

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 30, color = "#ffffff" }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    border: `4px solid ${color}`,
    borderTop: `4px solid transparent`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    fontWeight: "600",
  };

  return <div style={style}></div>;
};

export default Loader;
