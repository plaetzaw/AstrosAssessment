import { FindMaxSpeed } from './index'

test('find max speed', () => {
  const result = FindMaxSpeed([{ plate_speed: 12.14 }, { plate_speed: 16.14 }, { plate_speed: 8.14 }])
  console.log('hello result?', result)
  expect(result).toBe(16.14)
// OK
})
