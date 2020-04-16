const os = require('os')
const path = require('path')

function posix (id) {
  const cacheHome = process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache')
  return path.join(cacheHome, id)
}

function darwin (id) {
  return path.join(os.homedir(), 'Library', 'Caches', id)
}

function win32 (id) {
  const appData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local')
  return path.join(appData, id, 'Cache')
}

const implementation = (function () {
  switch (os.platform()) {
    case 'android': return posix
    case 'darwin': return darwin
    case 'freebsd': return posix
    case 'linux': return posix
    case 'openbsd': return posix
    case 'win32': return win32
    default: throw new Error('Your OS "' + os.platform() + '" is currently not supported by node-cachedir.')
  }
}())

module.exports = function cachedir (id) {
  if (typeof id !== 'string') {
    throw new TypeError('id is not a string')
  }
  if (id.length === 0) {
    throw new Error('id cannot be empty')
  }
  if (/[^0-9a-zA-Z-]/.test(id)) {
    throw new Error('id cannot contain special characters')
  }

  return implementation(id)
}
