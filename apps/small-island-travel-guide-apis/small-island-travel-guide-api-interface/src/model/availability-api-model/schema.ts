import { gql } from 'apollo-server';

/**
 * Fetch a list of all blocked dates for all hosts' listings
 * Fetch a list of all blocked dates for all hosts' listings within a specfic period
 * Fetch a list of all blocked dates for a specific host's listings
 * Fetch a list of all blocked dates for a specific host's listings within a specfic period
 * Fetch a list of all blocked dates for a specific host's specific listing
 * Fetch a list of all blocked dates for a specific host's specific listing within a specfic period
 */
const typeDefs = gql`
  type Host {
    id: ID!
    hostName: String!
    location: String!
    phone: String
    email: String!
    listings: [Listing]
  }

  type Listing {
    id: ID!
    hostId: ID!
    name: String
    description: String
    type: ListingType
    bookings: [Booking]
    rate: Int!
  }

  type Booking {
    id: ID!
    listings: [String]!
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
    hostsAvailability: [Host]!
    hostsAvailabilityBetweenDates(fromDate: String, endDate: String): [Host]!
    hostAvailability(name: String!): Host
    hostAvailabilityBetweenDates(
      hostName: String!
      startDate: String
      endDate: String
    ): Host
    hostListingAvailability(hostName: String!, listingID: ID!): Host
    hostListingAvailabilityBetweenDates(
      hostName: String!
      listingID: ID!
      startDate: String
      endDate: String
    ): Host
  }
`;

export default typeDefs;
