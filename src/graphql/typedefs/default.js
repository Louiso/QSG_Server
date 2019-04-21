const { gql } = require('apollo-server')

const Default = gql`
  type Query {
    holaMundo: String
  }
  type Mutation {
    postHola: String
  }
`

module.exports = Default;