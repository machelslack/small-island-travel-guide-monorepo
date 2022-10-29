import { RESTDataSource } from 'apollo-datasource-rest';
declare class AvailabilityAPI extends RESTDataSource {
    response: any;
    constructor();
    getAllHosts(): Promise<any>;
    hostReducer(host: any): {
        id: any;
        hostName: any;
        location: any;
        phone: any;
        email: any;
        listings: any;
    };
}
export default AvailabilityAPI;
