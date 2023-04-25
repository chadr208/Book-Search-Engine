import { gql } from "@apollo/client";

const GET_RESPONSES = gql`
  query getResponses {
    responses {
      id
      name
      yesno
      day
      location
      venue
    }
  }
`;

export { GET_RESPONSES };
