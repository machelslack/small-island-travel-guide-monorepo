const hosts = [
  {
    id: 'host-1.0.0',
    name: 'Sinopia Inn',
    location: 'Portland, Jamaica, West Indies',
    phone: '07395842452',
    email: 'info@sinopiainn.com',
  },
];

const listings = [
  {
    id: 'listing-1.0.0',
    hostId: 'host-1.0.0',
    name: 'Room 1',
    description: 'this is a description',
    type: 'ENSUTIESINGLEBEDBEDROOM',
  },
];

const bookings = [
  {
    id: 'booking-1.0.0',
    listingId: ['listing-1.0.0'],
    startDate: '2012-12-13T00:00:00.000Z',
    endDate: '2012-12-16T00:00:00.000Z',
  },
];

exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ hosts, listings, bookings }), //sending the array of movies as stringified JSON in the response
  };
};
