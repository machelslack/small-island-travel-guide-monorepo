declare const _default: {
    availabilty: {
        getAllHosts: () => any;
        getAllBookingsForAllHostByDates: ({ startDate, endDate }: {
            startDate: any;
            endDate: any;
        }) => any;
        getHostByName: (hostName: any) => any;
        getBookingsForHostByNameAnddDates: ({ hostName, startDate, endDate }: {
            hostName: any;
            startDate: any;
            endDate: any;
        }) => any;
        getListingById: (listingId: any) => any;
        getBookingsForListingByIdAndDates: ({ listingId, startDate, endDate }: {
            listingId: any;
            startDate: any;
            endDate: any;
        }) => any;
    };
};
export default _default;
