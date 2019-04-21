const { gql } = require('apollo-server')

const User = gql`

  type User {
    _id: ID,
    username: String,
    email: String
  }
  
  type SuccessResponseUser {
    ok: Boolean!
    user: User
  }

  type Error {
    path: String
    msg: String
  }

  type FailResponse {
    ok: Boolean!
    errs : [Error]
  }

  union UserResponse = SuccessResponseUser | FailResponse

  extend type Query {
    getUser: String
  }

  extend type Mutation {
    register(user: String): UserResponse
    login(user: String): UserResponse
  }

`

module.exports = User;