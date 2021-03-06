import { gql } from "@apollo/client";

export const CreateQuote = gql`
  mutation CreateQuote(
    $firstName: String!
    $lastName: String
    $email: String!
    $phone: String!
    $insurance: String!
    $additionalInformation: String
  ) {
    createQuote(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        insurance: $insurance
        additionalInformation: $additionalInformation
      }
    ) {
      data {
        id
        attributes {
          firstName
        }
      }
    }
  }
`;
