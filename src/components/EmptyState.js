import React from 'react';
import Lottie from 'lottie-react';
import emptyStateAnimation from '../assets/animations/empty-state.json';
function EmptyState({ 
  title = "Nothing here yet", 
  message = "Check back later for updates!",
  showAnimation = true 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 text-center min-h-[300px]">
      {showAnimation && (
        <div className="mb-8">
          <Lottie 
            animationData={emptyStateAnimation} 
            className="w-36 h-36 md:w-48 md:h-48 opacity-80"
            loop={true}
          />
        </div>
      )}
      <div className="max-w-md">
        <h3 className="text-accent-primary text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-text-primary text-base leading-relaxed">{message}</p>
      </div>
    </div>
  );
}

export default EmptyState;