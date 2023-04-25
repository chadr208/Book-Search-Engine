import { gql } from "@apollo/client";

const ADD_RESPONSE = gql`
  mutation addResponse(
    $name: String!
    $yesno: String!
    $day: String!
    $location: String!
    $venue: String!
  ) {
    addResponse(
      name: $name
      yesno: $yesno
      day: $day
      location: $location
      venue: $venue
    ) {
      id
      name
      yesno
      day
      location
      venue
    }
  }
`;

export { ADD_RESPONSE };
