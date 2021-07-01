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
    pitches.push(parseFloat(pitch[i].plate_speed).toFixed(0))
  }

  const nums = pitches.map(Number)
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // console.log(parseFloat(pitch[i].plate_speed))
    if (nums[i] > 86) {
      o86mph.push(nums[i])
    } else if (nums[i] < 86) {
      u86mph.push(nums[i])
    } else {
    // (nums[i] === 86)
      a86mph.push(nums[i])
    }
  }

  return [{ nums: nums }, { over86: o86mph }, { under86: u86mph }, { at86: a86mph }]
}
