import { gql } from '@apollo/client';

export const launchesQuery = gql`
  query GetLaunches($limit: Int, $find: LaunchFind, $offset: Int) {
    launchesPast(limit: $limit, find: $find, offset: $offset) {
      mission_name
      launch_date_local
      launch_success
      launch_site {
      site_name_long
      }
      links {
      wikipedia
      }
      rocket {
      rocket_name
      rocket_type
      first_stage {
      cores {
      flight
      core {
      reuse_count
      status
      }
      }
      }
      second_stage {
      payloads {
      payload_type
      payload_mass_kg
      }
      }
      }
      }
  }
`;