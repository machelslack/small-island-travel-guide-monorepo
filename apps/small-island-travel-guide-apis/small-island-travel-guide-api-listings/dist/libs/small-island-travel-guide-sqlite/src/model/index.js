export default {
    locations: `(location_id INTEGER PRIMARY KEY )`,
    hosts: `(host_id INTEGER PRIMARY KEY, FOREIGN KEY (location_id) REFERENCES locations(location_id))`,
    listings: `(listing_id INTEGER PRIMARY KEY,FOREIGN KEY (host_id) REFERENCES hosts(host_id))`,
    amenities: `(amenities_id INTEGER PRIMARY KEY,FOREIGN KEY (listing_id) REFERENCES listings(listing_id) )`,
    bookings: `(bookings_id INTEGER PRIMARY KEY,FOREIGN KEY (listing_id) REFERENCES listings(listing_id),FOREIGN KEY (guest_id) REFERENCES guests(guest_id) )`,
    guests: `(guest_id INTEGER PRIMARY KEY)`,
};
//# sourceMappingURL=index.js.map