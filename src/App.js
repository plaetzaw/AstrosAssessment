import { useState, useEffect } from 'react'
import axios from 'axios'
import PitchSelector from './components/PitchSelector'
import PitchData from './components/PitchData'

const App = () => {
  const [pitches, setPitches] = useState([])
  const [selectedPitch, setSelectedPitch] = useState([])
  const [fourseam, setFourSeam] = useState([])
  const [twoseam, setTwoSeam] = useState([])
  const [curve, setCurve] = useState([])
  const [changeup, setChangeup] = useState([])
  const [slider, setSlider] = useState([])
  const [cutter, setCutter] = useState([])
  const [splitter, setSplitter] = useState([])
  const [sinker, setSinker] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await Promise.all([axios.get('https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json')])
      console.log(res[0].data.queryResults.row)

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

  return (
    <div>
      Hello
      <PitchSelector selectedPitch={selectedPitch} setSelectedPitch={setSelectedPitch} />
      {selectedPitch}
      {(selectedPitch.includes(1)) && <PitchData pitch={fourseam} />}
      {(selectedPitch.includes(2)) && <PitchData pitch={twoseam} />}
      {(selectedPitch.includes(3)) && <PitchData pitch={slider} />}
      {(selectedPitch.includes(4)) && <PitchData pitch={changeup} />}
      {(selectedPitch.includes(5)) && <PitchData pitch={curve} />}
      {(selectedPitch.includes(6)) && <PitchData pitch={cutter} />}
      {(selectedPitch.includes(7)) && <PitchData pitch={splitter} />}
      {(selectedPitch.includes(8)) && <PitchData pitch={sinker} />}

    </div>
  )
}

export default App
