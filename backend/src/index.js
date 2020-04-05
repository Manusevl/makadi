const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const { setupDB } = require('./config/databaseConnection');
const cors = require('cors');

const app = express();
setupDB(v => console.log(v));

app.use(cors());

app.use(express.static('public'))

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
        pretty: true
    })
);

app.listen(4000);

console.log('SERVER OK');