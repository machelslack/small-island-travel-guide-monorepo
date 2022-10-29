import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

const typeDefs = `#graphql
type Host {
  id: ID!
  hostName: String!
  location: String!
  phone: String
  email: String!
}

type Listing {
  id: ID!
  hostId: ID!
  name: String
  description: String
  type: ListingType
  rate: Int!
}

type Booking {
  id: ID!
  startDate: String
  endDate: String
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
  hosts: [Host]!
  listings: [Listing]!
  bookings: [Booking]!
}
`;

const hosts = [
  {
    id: 'host-1.0.0',
    name: 'Sinopia Inn',
    location: 'Portland, Jamaica, West Indies',
    phone: '07395842452',
    email: 'info@sinopiainn.com',
  },
];
const listings = [
  {
    id: 'listing-1.0.0',
    hostId: 'host-1.0.0',
    name: 'Room 1',
    description: 'this is a description',
    type: 'ENSUTIESINGLEBEDBEDROOM',
  },
];
const bookings = [
  {
    id: 'booking-1.0.0',
    listingId: ['listing-1.0.0'],
    startDate: '2012-12-13T00:00:00.000Z',
    endDate: '2012-12-16T00:00:00.000Z',
  },
];

const resolvers = {
  Query: {
    hosts: () => hosts,
    listings: () => listings,
    bookings: () => bookings,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(server);
