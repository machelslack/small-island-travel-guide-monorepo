import { __awaiter } from "tslib";
import { RESTDataSource } from 'apollo-datasource-rest';
class AvailabilityAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://symamve4kg.execute-api.eu-west-1.amazonaws.com/dev';
    }
    getAllHosts() {
        return __awaiter(this, void 0, void 0, function* () {
            this.response = yield this.get('hosts');
            return Array.isArray(this.response.hosts)
                ? this.response.hosts.map((host) => this.hostReducer(host))
                : [];
        });
    }
    hostReducer(host) {
        return {
            id: host.id,
            hostName: host.name,
            location: host.location,
            phone: host.phone,
            email: host.email,
            listings: this.response.listings.filter((listings) => listings.hostId === host.id),
        };
    }
}
export default AvailabilityAPI;
//# sourceMappingURL=index.js.map