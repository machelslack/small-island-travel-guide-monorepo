import { ApolloServer } from 'apollo-server';
import typeDefs from '../model/index.js';
import controllers from '../controllers/index.js';
import AvailabilityAPI from '../store/availability-api-store/index.js';

// const { loadSchemaSync } = require('@graphql-tools/load');
// const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
//const schema = loadSchemaSync('/Users/mslack/Documents/projects/small-island-travel-guide-monorepo/apps/small-island-travel-guide-apis/small-island-travel-guide-api-interface/src/small-island-travel-guide-test-schema.graphql', { loaders: [new GraphQLFileLoader()] })
// dotenv.config()

const apiToUse = process.env.API || 'availability';

const server = new ApolloServer({
  resolvers: controllers.resolvers[apiToUse],
  typeDefs: typeDefs[apiToUse],
  context: { db: controllers.dbControllers[apiToUse] },
  dataSources: () => ({
    availabilityAPI: new AvailabilityAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`
  🚀 Server ready at ${url}
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});
