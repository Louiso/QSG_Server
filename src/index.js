const db = require('./db');
const app = require('./app')
const http = require('http')
const apolloServer = require('./apolloServer')
const httpServer = http.createServer(app)

apolloServer.installSubscriptionHandlers(httpServer)
apolloServer.applyMiddleware({app})

db.on('open',() => {
  console.log('Base de datos inicializada')
  httpServer.listen(process.env.PORT,() => {
    console.log(`Server running on: http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`)
    console.log(`Server Subscription running on: ws://localhost:${process.env.PORT}${apolloServer.subscriptionsPath}`)
  })
})