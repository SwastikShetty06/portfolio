import React from 'react';
import Lottie from 'lottie-react';
import loadingSpinner from '../assets/animations/loading-spinner.json';
import './LoadingAnimation.css';

function LoadingAnimation({ size = 100, message = "Loading..." }) {
  return (
    <div className="loading-container">
      <Lottie 
        animationData={loadingSpinner} 
        className="loading-animation"
        style={{ width: size, height: size }}
        loop={true}
      />
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
}

export default LoadingAnimation;
