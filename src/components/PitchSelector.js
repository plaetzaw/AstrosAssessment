import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Pitch = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    align-items: center;
    justify-content: center;
    // background-color: ${props => props.selected ? 'green' : 'white'}
`

const Pitches = [
  { id: 1, pitch: 'Four-Seam Fastball' },
  { id: 2, pitch: 'Two-Seam Fastball' },
  { id: 3, pitch: 'Slider' },
  { id: 4, pitch: 'Changeup' },
  { id: 5, pitch: 'Curveball' },
  { id: 6, pitch: 'Cuttter' },
  { id: 7, pitch: 'Splitter' },
  { id: 8, pitch: 'Sinker' }
]

const PitchSelector = ({ selectedPitch, setSelectedPitch }) => {
  const handleChange = (pitch) => {
    console.log('pitch selected:', pitch)
    if (selectedPitch.includes(pitch) === false) {
      setSelectedPitch([...selectedPitch, pitch])
      //   setChecked(true)
      console.log(pitch, 'added now the open pitches are', selectedPitch)
    } else {
      // find the position of this integer
      const idposition = selectedPitch.indexOf(pitch)
      setSelectedPitch(selectedPitch.filter((_, i) => i !== idposition))
      //   setChecked(false)
      console.log(pitch, 'removed, now the open pitches are', selectedPitch)
    }
  }

  const PitchMarkup = Pitches.map((pitch) => {
    return (
      <Pitch
        key={pitch.id}
        onClick={() => { handleChange(pitch.id) }}
      >
        {pitch.pitch}
        <br />
        {selectedPitch.includes(pitch.id) && 'SELECTED'}
      </Pitch>
    )
  })
  return (
    <Container>
      {PitchMarkup}
    </Container>
  )
}

export default PitchSelector
