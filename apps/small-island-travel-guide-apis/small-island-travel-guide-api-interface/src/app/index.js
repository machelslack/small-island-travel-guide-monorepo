const { ApolloServer } = require('apollo-server');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');

const db = require('./db');

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    albums: (root, args, context) => {
      const isFilteringByGenre = args && args.genre;

      if (isFilteringByGenre) {
        return context.db.getAlbumsByGenre(args.genre);
      }

      return context.db.getAllAlbums();
    },
    album: (root, args, context) => {
      const albumTitle = args && args.title;

      try {
        return context.db.getAlbumByTitle(albumTitle);
      } catch (err) {
        return null;
      }
    },
  },
};

const schema = loadSchemaSync('/Users/mslack/Documents/projects/small-island-travel-guide-monorepo/apps/small-island-travel-guide-apis/small-island-travel-guide-api-interface/src/small-island-travel-guide-test-schema.graphql', { loaders: [new GraphQLFileLoader()] })
 
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
