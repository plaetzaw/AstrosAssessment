export const FindMaxSpeed = (pitch) => {
  console.log(pitch)
  let max = 0
  for (let i = 0; i < pitch.length; i++) {
    if (pitch[i].plate_speed > max) {
      max = pitch[i].plate_speed
    }
  }
  console.log('Max Speed', max)
  return max
}

export const GetAllPitches = (pitch) => {
  const pitches = []
  for (let i = 0; i < pitch.length; i++) {
    pitches.push(parseFloat(pitch[i].plate_speed).toFixed(2))
  }
  console.log('Pitch Array', pitches)
  return pitches
}
