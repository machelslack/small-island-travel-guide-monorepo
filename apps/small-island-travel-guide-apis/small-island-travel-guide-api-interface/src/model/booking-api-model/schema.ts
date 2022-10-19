import { gql } from 'apollo-server';

/**
 * A single booking
 * Fetch all bookings
 * Fetch all booking between dates
 * Fetch all booking for a listing
 * Fetch all booking for a host
 * Fetch all booking for a listing between dates
 * Fetch all booking for a host between dates
 * Add new booking
 * Update booking status
 * Delete booking
 */
const typeDefs = gql`
  type Booking {
    id: ID!
    listings: [String]!
    startDate: String
    endDate: String
    status: BookingStatus!
  }

  enum BookingStatus {
    QUERY
    BOOKED
    CHECKEDIN
    HOSTING
    CHECKEDOUT
    CANCELLED
  }

  type BookingUpdateResponse {
    success: Boolean!
    message: String
    bookings: [Booking]
  }

  type Mutation {
    addNewBooking(
      fromDate: String
      endDate: String
      listingID: ID!
    ): BookingUpdateResponse!
    updateNewBooking(
      fromDate: String
      endDate: String
      listingID: ID!
      bookingID: ID!
      status: BookingStatus
    ): BookingUpdateResponse!
    deleteBooking(bookingID: ID!): BookingUpdateResponse!
  }

  type Query {
    abooking: Booking!
    allBookings: [Booking]!
    allBookingsBetweenDates(fromDate: String, endDate: String): [Booking]!
    allBookingsByListing(listingID: ID!): [Booking]
    allBookingsByListingBetweenDates(
      listingID: ID!
      fromDate: String
      endDate: String
    ): [Booking]
    allBookingsByHost(hostID: ID!): [Booking]
    allBookingsByHostBetweenDates(
      hostID: ID!
      fromDate: String
      endDate: String
    ): [Booking]
  }
`;

export default typeDefs;
