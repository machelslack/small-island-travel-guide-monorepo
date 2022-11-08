import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'graphql-tag';
const listings = [
    {
        id: 'listing-1.0.0',
        hostId: 'host-1.0.0',
        name: 'Room 1',
        description: 'this is a description',
        type: 'ENSUTIESINGLEBEDBEDROOM',
        rate: 50.0,
    },
    {
        id: 'listing-2.0.0',
        hostId: 'host-1.0.0',
        name: 'Room 2',
        description: 'this is a description',
        type: 'ENSUTIESINGLEBEDBEDROOM',
        rate: 100.0,
    },
];
const fetchListingByHostId = (id) => {
    return {
        listings: listings.filter((listing) => listing.hostId === id),
    };
};
const typeDefs = gql `
  type Host @key(fields: "id") {
    id: ID!
    listings: [Listing]!
  }

  type Listing @key(fields: "id") {
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
const resolvers = {
    Query: {
        listings: () => listings,
    },
    Host: {
        __resolveReference(host, { fetchListingByHostId }) {
            return fetchListingByHostId(host.id);
        },
    },
};
const server = new ApolloServer({
    schema: buildSubgraphSchema({
        typeDefs,
        resolvers,
    }),
});
const standAloneServer = await startStandaloneServer(server, {
    listen: { port: 4002 },
    context: async () => ({
        fetchListingByHostId,
        // dataSources: () => ({
        //   listingApi: new ListingserAPI({ database }),
        // }),
    }),
});
const url = async () => standAloneServer;
url().then((response) => {
    console.log(`🚀  Server ready at: ${response.url}`);
});
//# sourceMappingURL=index.js.map