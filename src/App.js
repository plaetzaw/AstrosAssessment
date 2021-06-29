import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [pitches, setPitches] = useState(null)
  const [selectedPitch, setSelectedPitch] = useState([])
  const [twoseam, setTwoSeam] = useState(null)
  const [fourseam, setFourSeam] = useState([])
  const [curve, setCurve] = useState(null)
  const [change, setChange] = useState(null)

  useEffect(async () => {
    const forseam = []
    const twoseam = []
    const slider = []
    const sinker = []
    const curve = []
    const cutter = []
    const changeup = []
    const splitter = []

    const res = await axios.get('https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json')
    // console.log(res.data.queryResults.row)
    const wait = await setPitches(res.data.queryResults.row)
    for (let i = 0; i < pitches.length; i++) {
      // console.log(pitches[i].pitch_name)
      if (pitches[i].pitch_name === 'Four-seam FB') {
        forseam.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Two-seam FB') {
        twoseam.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Slider') {
        slider.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Sinker') {
        sinker.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Sinker') {
        sinker.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Curveball') {
        curve.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Cutter') {
        cutter.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Changeup') {
        changeup.push(pitches[i])
      }
      if (pitches[i].pitch_name === 'Splitter') {
        splitter.push(pitches[i])
      }
    }
    console.log(fourseam, twoseam, slider, sinker, curve, cutter, changeup, splitter)
  }, [selectedPitch])

  return (
    <div>
      Hello
    </div>
  )
}

export default App
