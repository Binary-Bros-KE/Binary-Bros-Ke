import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './piechart.css';  // Import the CSS file
import TypicalHeader from '../typicalHeader/typicalHeader';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['WhatsApp', 'Facebook', 'Instagram', 'Twitter (X)', 'TikTok', 'YouTube'],
  datasets: [
    {
      label: '# of Users',
      data: [16500000, 10800000, 3220000, 1300000, 10600000, 9790000],
      backgroundColor: [
        '#FF6384', // WhatsApp
        '#36A2EB', // Facebook
        '#FFCE56', // Instagram
        '#66ff00', // Twitter (X)
        '#4BC0C0', // TikTok
        '#9966FF'  // YouTube
      ],
      borderWidth: 1,
    },
  ],
};

const SocialMediaUsageChart = () => {
  return (
    <div className="market-insight-section">
    <TypicalHeader Title={"<span>Social Media Usage</span> in Kenya"} subTitle={"Market Insights"}/>
    <div className="chart-section">
      <div className="chart-description">
        <p>Kenya's social media landscape is rapidly evolving, with platforms like Facebook, Instagram, and TikTok seeing significant user growth. Mobile phones dominate internet access, making mobile-friendly content crucial. Understanding these trends helps us tailor strategies that resonate with local audiences.<br />This chat shows a breakdown of the number of users on popular platforms</p>
        <p></p>
        <ul>
          <li><span className="legend-color whatsapp"></span> WhatsApp: 16.5 million users</li>
          <li><span className="legend-color facebook"></span> Facebook: 10.8 million users</li>
          <li><span className="legend-color instagram"></span> Instagram: 3.22 million users</li>
          <li><span className="legend-color twitter"></span> Twitter (X): 1.3 million users</li>
          <li><span className="legend-color tiktok"></span> TikTok: 10.6 million users</li>
          <li><span className="legend-color youtube"></span> YouTube: 9.79 million users</li>
        </ul>
      </div>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
    </div>
  );
};

export default SocialMediaUsageChart;
