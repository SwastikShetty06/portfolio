# Lottie Animations for Portfolio

This directory contains Lottie animation files (.json) used throughout the portfolio to enhance visual appeal and user experience.

## Implemented Animations

### 1. **coding-animation.json**
- **Used in**: Hero section (HeroHeader component)
- **Purpose**: Visual representation of coding/development
- **Features**: Animated monitor with code lines appearing

### 2. **react-icon.json**
- **Used in**: Skills section (SkillGroupGrid component)
- **Purpose**: Animated React.js logo for Frontend skills
- **Features**: Rotating orbital animation representing React's component structure

### 3. **loading-spinner.json**
- **Used in**: LoadingAnimation component (reusable)
- **Purpose**: Loading states throughout the application
- **Features**: Smooth rotating circular progress indicator

### 4. **empty-state.json**
- **Used in**: EmptyState component (reusable)
- **Purpose**: When no content is available (projects, etc.)
- **Features**: Breathing empty box animation with subtle text

## Components Using Lottie

### LoadingAnimation Component
```jsx
import LoadingAnimation from './components/LoadingAnimation';

// Usage
<LoadingAnimation size={100} message="Loading projects..." />
```

### EmptyState Component
```jsx
import EmptyState from './components/EmptyState';

// Usage
<EmptyState 
  title="No projects yet" 
  message="Check back later for updates!"
  showAnimation={true}
/>
```

### Skill Icons
The SkillGroupGrid component now supports both emoji and Lottie animations:
```jsx
{
  category: 'Frontend',
  skills: ['React.js', 'HTML', 'CSS'],
  icon: reactIcon,  // Lottie animation
  type: 'lottie'
}
```

## Adding New Animations

1. **Download from LottieFiles**: Visit [lottiefiles.com](https://lottiefiles.com)
2. **Save JSON**: Place the .json file in this directory
3. **Import**: Import in your component
4. **Use**: Add to your JSX with the Lottie component

```jsx
import Lottie from 'lottie-react';
import myAnimation from '../assets/animations/my-animation.json';

function MyComponent() {
  return (
    <Lottie 
      animationData={myAnimation}
      className="my-animation"
      loop={true}
      style={{ width: 200, height: 200 }}
    />
  );
}
```

## Benefits

- **Performance**: Lightweight vector animations
- **Scalability**: Perfect quality at any size
- **Interactivity**: Can be controlled with code
- **Cross-platform**: Works everywhere React works
- **Professional**: Adds modern, polished feel to the portfolio

## Best Practices

1. **Keep file sizes small** - Optimize animations for web
2. **Use appropriate dimensions** - Match component requirements
3. **Consider accessibility** - Add reduced motion support if needed
4. **Test on mobile** - Ensure animations work well on all devices
5. **Fallback options** - Have static alternatives for critical content
