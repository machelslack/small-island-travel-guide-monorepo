declare const resolvers: {
    Query: {
        abooking: (root: any, args: any, context: any) => any;
        allBookings: (root: any, args: any, context: any) => any;
        allBookingsBetweenDates: (root: any, args: any, context: any) => any;
        allBookingsByListing: (root: any, args: any, context: any) => any;
        allBookingsByListingBetweenDates: (root: any, args: any, context: any) => any;
        allBookingsByHost: (root: any, args: any, context: any) => any;
        allBookingsByHostBetweenDates: (root: any, args: any, context: any) => any;
    };
    Mutation: {
        newBooking: (root: any, args: any, context: any) => any;
        changedBooking: (root: any, args: any, context: any) => any;
        deleteBooking: (root: any, args: any, context: any) => any;
    };
};
export default resolvers;
