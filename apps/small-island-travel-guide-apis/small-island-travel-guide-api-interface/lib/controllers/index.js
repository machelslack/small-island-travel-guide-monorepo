import availabilityResolvers from './availability-api-controllers/resolvers.js';
import availabilityDbController from './availability-api-controllers/dbController.js';
export default {
    dbControllers: {
        availabilty: availabilityDbController,
    },
    resolvers: {
        availabilty: availabilityResolvers,
    },
};
//# sourceMappingURL=index.js.map