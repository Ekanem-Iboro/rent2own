import React from "react";

const SpinnerOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-8 border-transparent border-t-blue-500"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full animate-spin-reverse">
          <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerOverlay;
