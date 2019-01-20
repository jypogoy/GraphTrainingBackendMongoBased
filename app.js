const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Allow cross origin access
app.use(cors());

// middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// connect to the mlab database
mongoose.connect('mongodb://pogs:pogs123@ds131601.mlab.com:31601/gql-pogs');
mongoose.connection.on('open', () => {
    console.log('Connected to the database!');
});

app.listen(4000, () => {
    console.log('Now listening to port 4000...');
});