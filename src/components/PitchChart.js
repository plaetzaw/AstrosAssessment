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
      categories: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    }
  }

  return (
    <div>
      <Chart options={options} series={series} type='bar' width={500} height={500} />
    </div>

  )
}

export default PitchChart
