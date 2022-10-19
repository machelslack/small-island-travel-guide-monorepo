import data from '../../store/booking-api-store/data.json';

const db = {
  getBooking: (bookingId) => data.bookings,
  getAllBookings: () => data.bookings,
  getAllBookingsByDates: ({ startDate, endDate }) => data.bookings,
  getBookingByListing: (listingId) => data.bookings,
  getBookingsByHost: (hostId) => data.bookings,
  getBookingByListingByDates: ({ listingId, startDate, endDate }) =>
    data.bookings,
  getBookingsByHostByDates: ({ hostId, startDate, endDate }) => data.bookings,
  createNewBooking: () => {},
  updateExistingBooking: () => {},
  deleteExistingBooking: () => {},
};

export default db;
