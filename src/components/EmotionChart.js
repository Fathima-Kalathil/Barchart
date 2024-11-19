import { useEffect, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController } from 'chart.js';

// Register necessary chart.js components
ChartJS.register(
  CategoryScale,   // For categorical x-axis (labels)
  LinearScale,     // For linear y-axis
  BarElement,      // For bar chart elements
  Title,           // For title
  Tooltip,         // For tooltips
  Legend,
  BarController            // For the chart legend
);

const EmotionChart = ({ data }) => {
  const chartRef = useRef(null);

  const emotions = ['angry', 'contempt', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise'];
  const colors = ['#FF4A50', '#99CCCC', '#9C85C6', '#30B575', '#E7B90F', '#F6923D', '#25A0F8', '#B854FF'];

  useEffect(() => {
    // Only create chart if chartRef is set (to avoid errors)
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const chart = new ChartJS(ctx, {
        type: "bar", // Type of chart (bar chart)
        data: {
          labels: Object.keys(data),  // Emotion names (keys)
          datasets: [
            {
              label: "Emotion Data",  // Label for dataset
              data: Object.values(data),  // Emotion values (values)
              backgroundColor: Object.keys(data).map((emotion) => {
                const index = emotions.indexOf(emotion);
                return colors[index];  // Map each emotion to its corresponding color
              }),
              borderColor: Object.keys(data).map((emotion) => {
                const index = emotions.indexOf(emotion);
                return colors[index];  // Use the same color for border
              }),
              borderWidth: 1,  // Width of bar border
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,  // Start the y-axis at 0
            },
          },
        },
      });

      // Clean up chart when component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);  // Recreate chart when data changes

  return <canvas ref={chartRef}></canvas>;  // Canvas element to render chart
};

export default EmotionChart;
