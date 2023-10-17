import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./content.css";

const AnimatedBarChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Store the chart instance

    useEffect(() => {
        // If there is an existing chart, destroy it
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", "Oct", "Nov", "Dec"],
            datasets: [{

                label: 'Bar Chart',
                data: [30, 20, 40, 35, 38, 10, 38, 40, 39, 35, 30, 33],
                backgroundColor: ['#f2efff', '#f2efff', '#f2efff', '#f2efff', '#f2efff', '#f2efff', '#f2efff', '#5a32ea', '#f2efff', '#f2efff', '#f2efff', '#f2efff'],
                borderColor: 'rgb(75, 192, 192)',
                borderRadius: 15,
                borderWidth: 0,
                barPercentage: 1, // Set to 1 to ensure full bars
                categoryPercentage: 0.9,

            }],
        };
        const options = {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false, // Hide the x-axis grid lines
                    },
                },
                y: {
                    display: false,
                    beginAtZero: true,
                    grid: {
                        display: false, // Hide the y-axis grid lines
                    },
                },
            },
        };

        // Create a new chart
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });
    }, []);


    return (
        <div style={{ padding: '10px', maxHeight: '18rem' }}>
            <div className='Tophead' style={{ justifyContent: "space-between", display: 'flex' }}>
                <div>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} >Overview</Typography>
                    <Typography style={{ color: '#a7a8aa', fontSize: '10px' }}>Monthly Earning</Typography>
                </div>
                <div>
                    <Accordion style={{ width: '120px', height: '40px', alignItems: 'center', backgroundColor: '#fafbff', boxShadow: 'none' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ color: '#a7a8aa', fontSize: '12px' }}>Quarterly</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Hello
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <canvas ref={chartRef} style={{ maxWidth: '80%', maxHeight: '80%' }}> </canvas>
        </div>
    );
};

Chart.register({
    id: 'bar',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const datasets = chart.data.datasets;

        for (let i = 0; i < datasets.length; i++) {
            const dataset = datasets[i];
            if (dataset.type === 'roundedBar') {
                const meta = chart.getDatasetMeta(i);

                meta.data.forEach((bar, index) => {
                    const cornerRadius = dataset.borderRadius || 0;
                    const x = bar.x;
                    const y = bar.y;
                    const width = bar.width;
                    const height = bar.height;

                    // Draw the top rounded corners
                    ctx.beginPath();
                    ctx.moveTo(x + cornerRadius, y);
                    ctx.lineTo(x + width - cornerRadius, y);
                    ctx.arcTo(x + width, y, x + width, y + cornerRadius, cornerRadius);
                    ctx.lineTo(x + width, y + height - cornerRadius);

                    // Draw the bottom rounded corners
                    ctx.arcTo(x + width, y + height, x + width - cornerRadius, y + height, cornerRadius);
                    ctx.lineTo(x + cornerRadius, y + height);
                    ctx.arcTo(x, y + height, x, y + height - cornerRadius, cornerRadius);
                    ctx.lineTo(x, y + cornerRadius);
                    ctx.arcTo(x, y, x + cornerRadius, y, cornerRadius);

                    ctx.fillStyle = dataset.backgroundColor;
                    ctx.fill();
                    ctx.closePath();
                });
            }
        }
    },
});
export default AnimatedBarChart;
