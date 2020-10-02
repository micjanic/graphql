const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

//connect to mlab database
mongoose.connect(
  'mongodb+srv://mjanicki:Carrington64@cluster0.hg6so.mongodb.net/<dbname>?retryWrites=true&w=majority'
)
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('now listening on port 4000')
})
