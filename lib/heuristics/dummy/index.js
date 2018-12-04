'use strict'

const name = 'Dummy'
const message = 'Dummy rule for testing'
const priority = 3
const reference = 'https://www.google.com/'

module.exports = {
  name,
  message,
  priority,
  reference,
  run: function (packageName, filePath) {
    if (packageName !== '__dummy__') {
      return {
        name,
        message,
        priority,
        reference,
        packageName,
        filePath
      }
    } else {
      return null
    }
  }
}