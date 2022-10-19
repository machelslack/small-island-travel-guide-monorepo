import availabilityResolvers from './availability-api-controllers/resolvers.js';
import availabilityDbController from './availability-api-controllers/dbController.js';
import bookingResolvers from './availability-api-controllers/resolvers.js';
import bookingDbController from './availability-api-controllers/dbController.js';

export default {
  dbControllers: {
    availabilty: availabilityDbController,
    booking: bookingDbController,
  },
  resolvers: {
    availabilty: availabilityResolvers,
    booking: bookingResolvers,
  },
};
