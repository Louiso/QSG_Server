const schema = require('./graphql/index')
const { ApolloServer } = require('apollo-server-express')

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    return {
      msg: 'sera'
    }
  },
  subscriptions: {
    onConnect: (params, webSocket) => {
      if(params.authorizationWS){
        return {
          user: 'socket user'
        }
      }
    }
  },
  uploads: {
    maxFieldSize: 10000000,
    maxFiles: 20
  }
})

module.exports = apolloServer