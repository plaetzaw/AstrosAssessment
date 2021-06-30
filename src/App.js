import { useState, useEffect } from 'react'
import axios from 'axios'
import PitchSelector from './components/PitchSelector'
import PitchData from './components/PitchData'

const App = () => {
  const [pitches, setPitches] = useState([])
  const [selectedPitch, setSelectedPitch] = useState([1])
  const [twoseam, setTwoSeam] = useState([])
  const [fourseam, setFourSeam] = useState([])
  const [curve, setCurve] = useState([])
  const [changeup, setChangeup] = useState([])
  const [slider, setSlider] = useState([])
  const [cutter, setCutter] = useState([])
  const [splitter, setSplitter] = useState([])
  const [sinker, setSinker] = useState([])

  useEffect(() => {
    const getData = async () => {
      console.log('fire')
      const res = await Promise.all([axios.get('https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json')])
      console.log(res[0].data.queryResults.row)
      // console.log(res.data.queryResults.row)
      // await Promise.all([
      //   setPitches(res[0].data.queryResults.row)
      // ])
      const foursm = []
      const twosm = []
      const slid = []
      const sink = []
      const curv = []
      const cut = []
      const change = []
      const split = []

      const pitches = res[0].data.queryResults.row

      for (let i = 0; i < pitches.length; i++) {
        // console.log(pitches[i].pitch_name)
        if (pitches[i].pitch_name === 'Four-seam FB') {
          foursm.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Two-seam FB') {
          twosm.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Slider') {
          slid.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Sinker') {
          sink.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Curveball') {
          curv.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Cutter') {
          cut.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Changeup') {
          change.push(pitches[i])
        }
        if (pitches[i].pitch_name === 'Splitter') {
          split.push(pitches[i])
        }
      }

      setPitches(res[0].data.queryResults.row)

      // console.log(foursm, twosm, slid, sink, curv, cut, change, split)
      setFourSeam(foursm)
      setTwoSeam(twosm)
      setCurve(curv)
      setChangeup(change)
      setSlider(slid)
      setSplitter(split)
      setSinker(sink)
      setCutter(cut)
      // console.log('state pitch arrays', foursm, twosm, curv, change, slid, split, sink, cut)
    }
    getData()
  }, [])

  // console.log(fourseam)

  return (
    <div>
      Hello
      <PitchSelector selectedPitch={selectedPitch} setSelectedPitch={setSelectedPitch} />
      <PitchData pitch={fourseam} />
    </div>
  )
}

export default App
