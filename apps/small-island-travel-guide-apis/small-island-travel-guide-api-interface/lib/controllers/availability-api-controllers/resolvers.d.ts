declare const resolvers: {
    Query: {
        hostsAvailability: (root: any, args: any, context: any) => any;
        hostsAvailabilityBetweenDates: (root: any, args: any, context: any) => any;
        hostAvailability: (root: any, args: any, context: any) => any;
        hostAvailabilityBetweenDates: (root: any, args: any, context: any) => any;
        hostListingAvailability: (root: any, args: any, context: any) => any;
        hostListingAvailabilityBetweenDates: (root: any, args: any, context: any) => any;
    };
};
export default resolvers;
