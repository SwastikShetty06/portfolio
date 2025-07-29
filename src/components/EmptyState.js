import React from 'react';
import Lottie from 'lottie-react';
import emptyStateAnimation from '../assets/animations/empty-state.json';
import './EmptyState.css';

function EmptyState({ 
  title = "Nothing here yet", 
  message = "Check back later for updates!",
  showAnimation = true 
}) {
  return (
    <div className="empty-state">
      {showAnimation && (
        <div className="empty-state-animation">
          <Lottie 
            animationData={emptyStateAnimation} 
            className="empty-animation"
            loop={true}
          />
        </div>
      )}
      <div className="empty-state-content">
        <h3 className="empty-state-title">{title}</h3>
        <p className="empty-state-message">{message}</p>
      </div>
    </div>
  );
}

export default EmptyState;
