import React from 'react';
import EmotionChart from '../components/EmotionChart'; // Ensure this path is correct

// This is your default exported React component
export default function HomePage() {
  // Sample data for the emotion chart
  const emotions = {
    "angry": 0.010571206919848919,
    "contempt": 0.028706828132271767,
    "disgust": 0.009032581932842731,
    "fear": 0.006838742643594742,
    "happy": 0.11070075631141663,
    "neutral": 0.7998487949371338,
    "sad": 0.01925925351679325,
    "surprise": 0.01504179835319519
  };

  return (
    <div>
      <h1>Emotion Chart</h1>
      <EmotionChart data={emotions} />
    </div>
  );
}
