import data from '../../store/booking-api-store/data.json';
const db = {
    getBooking: (bookingId) => data.bookings,
    getAllBookings: () => data.bookings,
    getAllBookingsByDates: ({ startDate, endDate }) => data.bookings,
    getBookingByListing: (listingId) => data.bookings,
    getBookingsByHost: (hostId) => data.bookings,
    getBookingByListingByDates: ({ listingId, startDate, endDate }) => data.bookings,
    getBookingsByHostByDates: ({ hostId, startDate, endDate }) => data.bookings,
    createNewBooking: () => {
        return {
            success: '',
            message: '',
            bookings: [],
        };
    },
    updateExistingBooking: () => {
        return {
            success: '',
            message: '',
            bookings: [],
        };
    },
    deleteExistingBooking: () => {
        return {
            success: '',
            message: '',
            bookings: [],
        };
    },
};
export default db;
//# sourceMappingURL=dbController.js.map