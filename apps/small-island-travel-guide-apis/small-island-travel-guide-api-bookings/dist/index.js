import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
type Booking {
  id: ID!
  startDate: String
  endDate: String
}
  type Query {
    bookings: [Booking]!
  }
`;
const bookings = [
    {
        id: 'booking-1.0.0',
        startDate: '2012-12-13T00:00:00.000Z',
        endDate: '2012-12-16T00:00:00.000Z',
    },
];
const resolvers = {
    Query: {
        bookings: () => bookings,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const url = async () => await startStandaloneServer(server, {
    listen: { port: 4003 },
});
url().then((response) => {
    console.log(`🚀  Server ready at: ${response.url}`);
});
//# sourceMappingURL=index.js.map