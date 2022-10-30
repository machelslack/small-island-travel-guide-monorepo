import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'graphql-tag';
const bookings = [
    {
        id: 'booking-1.0.0',
        startDate: '2012-12-13T00:00:00.000Z',
        endDate: '2012-12-16T00:00:00.000Z',
        listings: ['listing-1.0.0'],
    },
    {
        id: 'booking-2.0.0',
        startDate: '2012-12-13T00:00:00.000Z',
        endDate: '2012-12-16T00:00:00.000Z',
        listings: ['listing-2.0.0'],
    },
    {
        id: 'booking-3.0.0',
        startDate: '2012-12-13T00:00:00.000Z',
        endDate: '2012-12-16T00:00:00.000Z',
        listings: ['listing-1.0.0', 'listing-2.0.0'],
    },
];
const fetchBookingByListingId = (id) => {
    return {
        bookings: bookings.filter((booking) => booking.listings.includes(id)),
    };
};
const typeDefs = gql `
  type Listing @key(fields: "id") {
    id: ID!
    bookings: [Booking]
  }

  type Booking @key(fields: "id") {
    id: ID!
    startDate: String
    endDate: String
    listings: [String]
  }
  type Query {
    bookings: [Booking]!
  }
`;
const resolvers = {
    Query: {
        bookings: () => bookings,
    },
    Listing: {
        __resolveReference(listing, { fetchBookingByListingId }) {
            return fetchBookingByListingId(listing.id);
        },
    },
};
const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
const standAloneServer = await startStandaloneServer(server, {
    listen: { port: 4003 },
    context: async () => ({
        fetchBookingByListingId,
    }),
});
const url = async () => standAloneServer;
url().then((response) => {
    console.log(`🚀  Server ready at: ${response.url}`);
});
//# sourceMappingURL=index.js.map