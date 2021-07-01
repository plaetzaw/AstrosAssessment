import React from 'react'
import Chart from 'react-apexcharts'

const PitchChart = ({ pitches, max }) => {
  console.log('Here is your chart data', pitches, max)

  const series = [{
    data: pitches[0].nums
  }]

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    }
  }

  return (
    <div>
      <Chart options={options} series={series} type='bar' width={500} height={500} />
      Max Pitch Speed: {max} MPH
    </div>

  )
}

export default PitchChart
