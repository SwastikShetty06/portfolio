import React from 'react';
import Lottie from 'lottie-react';
import loadingSpinner from '../assets/animations/loading-spinner.json';
function LoadingAnimation({ size = 100, message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Lottie 
        animationData={loadingSpinner} 
        className="drop-shadow-lg"
        style={{ width: size, height: size }}
        loop={true}
      />
      {message && <p className="mt-4 text-base text-text-primary font-medium text-center">{message}</p>}
    </div>
  );
}

export default LoadingAnimation;