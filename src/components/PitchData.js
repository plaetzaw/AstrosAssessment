import React, { useState } from 'react'
import { FindMaxSpeed, GetAllPitches } from '../utils'
import PitchChart from './PitchChart'

const PitchData = ({ pitch }) => {
//   const [chartData, setChartData] = useState(null)
  console.log('hi?')

  //   const chartData = []

  const pitches = GetAllPitches(pitch)
  const max = FindMaxSpeed(pitch)

  return (
    <>
      <PitchChart data={pitches} />
    </>

  )
}

export default PitchData