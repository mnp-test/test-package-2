import { debuglog } from 'util'

const LOG = debuglog('@mnp-test/test-package-2')

/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function testPackage_2(config = {}) {
  const {
    type,
  } = config
  LOG('@mnp-test/test-package-2 called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
