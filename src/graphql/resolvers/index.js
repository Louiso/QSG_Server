const lodash = require('lodash')
const Default = require('./default')
const User = require('./user')

const resolvers = lodash.merge(
  Default,
  User
)

module.exports = resolvers;