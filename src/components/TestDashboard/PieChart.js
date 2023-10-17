import { Typography } from '@mui/material';
import { Chart, Title, Tooltip, CategoryScale, Legend } from 'chart.js';
import React, { useEffect, useRef } from 'react';

function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      return; // Ensure the canvas element exists
    }

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    if (!ctx) {
      return; // Ensure the context is available
    }

    const data = {
      labels: ['Red', 'Blue'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [100, 200, 200],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgba(0, 0, 0,0)'],
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: false, // Hide the title
        },
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false, // Disable the tooltip
        },
        center: {
          text: 'Red is 2/3 the total numbers',
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20, // Default is 20 (as a percentage)
          minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
          lineHeight: 25 // Default is 25 (in px), used for when text wraps
        }
      },

    };
    const doughnutLabel = {
      id: 'doughnutLabel',
      beforeDatasetDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;
        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;
        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const lines = ['65%', 'Total New', 'Customers'];

        lines.forEach((line, index) => {
          const y = yCoor - (lines.length - 1) * 12 + index * 24; // Adjust line height
          ctx.fillText(line, xCoor, y);
        });

        ctx.restore();
      },


    }

    // Create a new chart
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
      plugins: [doughnutLabel]
    });

    // Create a custom plugin to display text in the center

  }, []);

  return (
    <div style={{ overflow: 'hidden', padding: '10px', maxHeight: '18rem' }}>
      <div style={{ float: 'left', textAlign: 'left' }}>
        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>Customers</Typography>
        <Typography style={{ color: '#a7a8aa', fontSize: '10px' }}>
          Customers that buy products
        </Typography>
      </div>
      <canvas ref={chartRef} style={{ maxWidth: '80%', maxHeight: '80%' }}>
        <Typography>65%</Typography>
        <Typography>Total New</Typography>
        <Typography>Customers</Typography>
      </canvas>
    </div>
  );
}

export default PieChart;
