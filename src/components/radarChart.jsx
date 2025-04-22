'use client'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function RadarChart({ data }) {
  const chartData = {
    labels: ['CRE', 'TEC', 'ATT', 'DEF', 'TAC'],
    datasets: [
      {
        label: 'Atributos',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)'
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: '#333'
        },
        pointLabels: {
          color: '#333',
          font: {
            size: 14
          }
        }
      }
    }
  }

  return <Radar data={chartData} options={options} />
}
