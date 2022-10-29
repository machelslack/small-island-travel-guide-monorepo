import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
// The GraphQL schema
const typeDefs = `
  type Query {
    hello: String
  }
`;
// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// const {
//   url,
// } = async () =>
//   await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });
export const graphqlHandler = startServerAndCreateLambdaHandler(server);
//# sourceMappingURL=server.js.map