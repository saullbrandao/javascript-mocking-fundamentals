require('../__no-framework-mocks__/utils')
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('John', 'Paul')
assert.strictEqual(winner, 'John')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['John', 'Paul'],
  ['John', 'Paul']
])

// cleanup
delete require.cache[utilsPath]