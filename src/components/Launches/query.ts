import gql from "graphql-tag"

export const LaunchesInfo = gql`
query LaunchesInfo{
    launches {
      id
      mission_id
      mission_name
      launch_success
      launch_year
    }
  }
`