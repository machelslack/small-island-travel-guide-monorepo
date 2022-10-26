const { RESTDataSource } = require('apollo-datasource-rest');

class AvailabilityAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://symamve4kg.execute-api.eu-west-1.amazonaws.com/dev';
  }

  async getAllHosts() {
    const response = await this.get('hosts');
    return Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];
  }

  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };
  }

  async getLaunchById({ launchId }) {
    const response = await this.get('launches', { flight_number: launchId });
    return this.launchReducer(response[0]);
  }


}

module.exports = AvailabilityAPI;
