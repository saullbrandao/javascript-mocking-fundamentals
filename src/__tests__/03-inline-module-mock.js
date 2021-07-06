const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner', () => {
  const winner = thumbWar('John', 'Paul')
  expect(winner).toBe('John')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['John', 'Paul'],
    ['John', 'Paul']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})