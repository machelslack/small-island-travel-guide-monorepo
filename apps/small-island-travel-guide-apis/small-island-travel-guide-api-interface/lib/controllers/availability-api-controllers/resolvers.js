const resolvers = {
    Query: {
        hosts: (root, args, context) => context.dataSources.availabilityAPI.getAllHosts(),
        // hostsAvailability: (root, args, context) => {
        //   return context.db.getAllHosts();
        // },
        //   hostsAvailabilityBetweenDates: (root, args, context) => {
        //     const startDate = args && args.startDate;
        //     const endDate = args && args.endDate;
        //     return context.db.getAllBookingsForAllHostByDates({ startDate, endDate });
        //   },
        //   hostAvailability: (root, args, context) => {
        //     const hostName = args && args.hostName;
        //     return context.db.getHost(hostName);
        //   },
        //   hostAvailabilityBetweenDates: (root, args, context) => {
        //     const startDate = args && args.startDate;
        //     const endDate = args && args.endDate;
        //     const hostName = args && args.hostName;
        //     return context.db.getBookingsForHostByNameAnddDates({
        //       hostName,
        //       startDate,
        //       endDate,
        //     });
        //   },
        //   hostListingAvailability: (root, args, context) => {
        //     const listingId = args && args.listingId;
        //     return context.db.getListingById(listingId);
        //   },
        //   hostListingAvailabilityBetweenDates: (root, args, context) => {
        //     const listingId = args && args.listingId;
        //     const startDate = args && args.startDate;
        //     const endDate = args && args.endDate;
        //     return context.db.getBookingsForListingByIdAndDates({
        //       listingId,
        //       startDate,
        //       endDate,
        //     });
        //   },
    },
};
export default resolvers;
//# sourceMappingURL=resolvers.js.map