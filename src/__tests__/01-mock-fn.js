const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('John', 'Paul')
  expect(winner).toBe('John')
  expect(utils.getWinner.mock.calls).toEqual([
    ['John', 'Paul'],
    ['John', 'Paul']
  ])

  // cleanup
  utils.getWinner = originalGetWinner
})