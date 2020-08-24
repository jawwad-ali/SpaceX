import gql from "graphql-tag"

export const LaunchProfile = gql`
query LaunchProfile($id: String!) {
    launch(id: $id) {
      id
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        video_link
      }
    }
  }
`