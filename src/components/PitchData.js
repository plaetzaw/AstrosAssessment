import React from 'react'
import { FindMaxSpeed, GetAllPitches } from '../utils'
import PitchChart from './PitchChart'

const PitchData = ({ pitch }) => {
  console.log('hi?')

  const pitches = GetAllPitches(pitch)
  console.log('here are you speeds', pitches)
  const max = FindMaxSpeed(pitch)

  return (
    <>
      <PitchChart pitches={pitches} max={max} />
    </>

  )
}

export default PitchData
