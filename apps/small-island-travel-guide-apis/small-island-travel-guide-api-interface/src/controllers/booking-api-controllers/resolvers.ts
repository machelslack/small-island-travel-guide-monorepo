const resolvers = {
  Query: {
    abooking: (root, args, context) => {
      return context.db.getBooking();
    },
    allBookings: (root, args, context) => {
      return context.db.getAllBookings();
    },
    allBookingsBetweenDates: (root, args, context) => {
      return context.db.getAllBookingsByDates();
    },
    allBookingsByListing: (root, args, context) => {
      return context.db.getBookingByListing();
    },
    allBookingsByListingBetweenDates: (root, args, context) => {
      return context.db.getBookingByListingByDates();
    },
    allBookingsByHost: (root, args, context) => {
      return context.db.getBookingByListingByDates();
    },
    allBookingsByHostBetweenDates: (root, args, context) => {
      return context.db.getBookingsByHostByDates();
    },
  },
};

export default resolvers;
