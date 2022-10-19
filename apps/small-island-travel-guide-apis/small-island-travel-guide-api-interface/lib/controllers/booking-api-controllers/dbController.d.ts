declare const db: {
    getBooking: (bookingId: any) => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    getAllBookings: () => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    getAllBookingsByDates: ({ startDate, endDate }: {
        startDate: any;
        endDate: any;
    }) => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    getBookingByListing: (listingId: any) => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    getBookingsByHost: (hostId: any) => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    getBookingByListingByDates: ({ listingId, startDate, endDate }: {
        listingId: any;
        startDate: any;
        endDate: any;
    }) => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    getBookingsByHostByDates: ({ hostId, startDate, endDate }: {
        hostId: any;
        startDate: any;
        endDate: any;
    }) => {
        id: string;
        listingId: string[];
        startDate: string;
        endDate: string;
    }[];
    createNewBooking: () => void;
    updateExistingBooking: () => void;
    deleteExistingBooking: () => void;
};
export default db;
