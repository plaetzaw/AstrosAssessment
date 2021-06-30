export const FindMaxSpeed = (pitch) => {
//   console.log(pitch)
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
  const o86mph = []
  const u86mph = []
  const a86mph = []
  for (let i = 0; i < pitch.length; i++) {
    pitches.push(parseFloat(pitch[i].plate_speed).toFixed(2))
  }

  const nums = pitches.map(Number)

  console.log(nums)

  for (let i = 0; i < pitch.length; i++) {
    // console.log(parseFloat(pitch[i].plate_speed))
    if (parseFloat(pitch[i].plate_speed) > 86) {
      o86mph.push(parseFloat(pitch[i].plate_speed).toFixed(0))
    } else if (parseFloat(pitch[i].plate_speed) < 86) {
      u86mph.push(parseFloat(pitch[i].plate_speed).toFixed(0))
    } else {
    // (parseFloat(pitch[i].plate_speed) === 86)
      a86mph.push(parseFloat(pitch[i].plate_speed).toFixed(0))
    }
    // pitches.push(parseFloat(pitch[i].plate_speed).toFixed(2))
  }
  //   console.log('Pitch Array', pitches)
  //   console.log('over86', o86mph)
  //   console.log('under85', u86mph)
  //   console.log('mid', a86mph)

  return [{ over86: o86mph }, { under86: u86mph }, { at86: a86mph }]
}
