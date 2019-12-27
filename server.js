const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Bring in graphql express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// create schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Connects to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

// Initializes application
const app = express();

// create graphiql application
app.use('/graphiql', graphiqlExpress({ endpointURL: './graphql' }));

// connect schemas with graphql
app.use(
  '/graphql',
  graphqlExpress({
    schema,
    context: {
      Recipe,
      User
    }
  })
);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
