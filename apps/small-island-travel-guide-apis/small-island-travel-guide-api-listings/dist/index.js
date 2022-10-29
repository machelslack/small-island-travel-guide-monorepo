import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
type Listing {
    id: ID!
    name: String
    description: String
    type: ListingType
    rate: Int!
  }

  enum ListingType {
    SINGLEBEDBEDROOM
    ENSUTIESINGLEBEDBEDROOM
    DOUBLEBEDBEDROOM
    ENSUITEDOUBLEBEDBEDROOM
    TRIPLEBEDBEDROOM
    ENSUITETRIPLEBEDBEDROOM
    WHOLEHOUSE
  }

  type Query {
    listings: [Listing]!
  }
`;
const listings = [
    {
        id: 'listing-1.0.0',
        name: 'Room 1',
        description: 'this is a description',
        type: 'ENSUTIESINGLEBEDBEDROOM',
    },
];
const resolvers = {
    Query: {
        listings: () => listings,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const url = async () => await startStandaloneServer(server, {
    listen: { port: 4002 },
});
url().then((response) => {
    console.log(`🚀  Server ready at: ${response.url}`);
});
//# sourceMappingURL=index.js.map