// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);

// console.log(`😍`, __filename);

// const json: any = fs.readFileSync(
//   path.join(
//     path.dirname(__filename),
//     ''
//   )
// );

import data from '../../store/availability-api-store/data.json';

/**
 * Fetch a list of all blocked dates for all hosts' listings
 * Fetch a list of all blocked dates for all hosts' listings within a specfic period
 * Fetch a list of all blocked dates for a specific host's listings
 * Fetch a list of all blocked dates for a specific host's listings within a specfic period
 * Fetch a list of all blocked dates for a specific host's specific listing
 * Fetch a list of all blocked dates for a specific host's specific listing within a specfic period
 */

const getBookings = ({ bookings, listingID }) =>
  bookings.filter((booking) => booking.listingId.includes(listingID));

const getListings = ({ host, listings, bookings }) => {
  return listings
    .filter((inv) => host.id === inv.hostId)
    .map((listing) => {
      return {
        ...listing,
        bookings: getBookings({ bookings, listingID: listing.Id }),
      };
    });
};

const getHost: any = ({ host, hostId }) =>
  host || data.hosts.filter((host) => host.id === hostId);

const AllHostsMap = {
  toGraphQL: ({ host, listings, bookings }) => {
    return {
      ...host,
      listings: getListings({ host, listings, bookings }),
    };
  },
};

const HostMap = {
  toGraphQL: ({ host, listings, bookings }) => {
    return {
      ...host,
      listings: getListings({ host, listings, bookings }),
    };
  },
};

const ListingMap: any = {
  toGraphQL: ({ listing, bookings }): any => {
    return {
      ...getHost({ hostId: listing.hostId }),
      listings: [
        {
          ...listing,
          bookings: getBookings({ bookings, listingID: listing.Id }),
        },
      ],
    };
  },
};

const db = {
  getAllHosts: () => {
    const listings = data.listings;
    const bookings = data.bookings;
    return data.hosts.map((host: any) =>
      AllHostsMap.toGraphQL({ host, listings, bookings })
    );
  },
  getAllBookingsForAllHostByDates: ({ startDate, endDate }) => {
    const listings = data.listings;
    const bookings = data.bookings;
    return data.hosts.map((host: any) =>
      AllHostsMap.toGraphQL({ host, listings, bookings })
    );
  },
  getHostByName: (hostName) => {
    const host = data.hosts.find((h) => h.name === hostName);
    const listings = data.listings;
    const bookings = data.bookings;
    return HostMap.toGraphQL({ host, listings, bookings });
  },
  getBookingsForHostByNameAnddDates: ({ hostName, startDate, endDate }) => {
    const host = data.hosts.find((h) => h.name === hostName);
    const listings = data.listings;
    const bookings = data.bookings;
    return HostMap.toGraphQL({ host, listings, bookings });
  },
  getListingById: (listingId) => {
    const listing = data.listings.find((l) => l.id === listingId);
    const bookings = data.bookings;
    return ListingMap.toGraphQL({ listing, bookings });
  },
  getBookingsForListingByIdAndDates: ({ listingId, startDate, endDate }) => {
    const listing = data.listings.find((l) => l.id === listingId);
    const bookings = data.bookings;
    return ListingMap.toGraphQL({ listing, bookings });
  },
};

export default db;
