/* eslint-env mocha */

const assert = require('assert')
const os = require('os')
const proxyquire = require('proxyquire')

const platforms = [
  ['darwin', `${os.homedir()}/Library/Caches/linusu`],
  ['freebsd', `${os.homedir()}/.cache/linusu`],
  ['linux', `${os.homedir()}/.cache/linusu`],
  ['openbsd', `${os.homedir()}/.cache/linusu`],
  ['win32', `${os.homedir()}/AppData/Local/linusu/Cache`]
]

platforms.forEach(function (platform) {
  describe(platform[0], () => {
    let cachedir

    before(() => {
      const os = {
        platform () { return platform[0] }
      }

      cachedir = proxyquire('./', { os })
    })

    it('should give the correct path', () => {
      const actual = cachedir('linusu')
      const expected = platform[1]

      assert.equal(actual, expected)
    })

    if (platform[0] === 'win32') {
      describe('when LOCALAPPDATA is set', () => {
        it('should give the correct path', () => {
          const oldLocalAppData = process.env.LOCALAPPDATA
          process.env.LOCALAPPDATA = 'X:/LocalAppData'
          const actual = cachedir('linusu')
          process.env.LOCALAPPDATA = oldLocalAppData
          const expected = 'X:/LocalAppData/linusu/Cache'

          assert.equal(actual, expected)
        })
      })
    }

    it('should throw on bad input', () => {
      assert.throws(() => cachedir())
      assert.throws(() => cachedir(''))
      assert.throws(() => cachedir({}))
      assert.throws(() => cachedir([]))
      assert.throws(() => cachedir(null))
      assert.throws(() => cachedir(1337))
      assert.throws(() => cachedir('test!!'))
      assert.throws(() => cachedir(undefined))
    })
  })
})
