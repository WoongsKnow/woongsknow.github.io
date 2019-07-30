console.log('오호라아');

// import { graphqlYoga } from "graphql-yoga";
const graphqlYoga = require('graphql-yoga');
console.log(graphqlYoga);

const server = new graphqlYoga.GraphQLServer({
  
});

server.start(
  () => console.log('Graphql Server Runnging')
);