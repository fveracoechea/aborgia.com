import { gql } from "@apollo/client";
import { StrapiFileFragment } from "./banner";

export const AboutMe = gql`
  ${StrapiFileFragment}
  query AboutMe {
    aboutMe {
      data {
        attributes {
          name
          description
          tagline
          picture {
            ...StrapiFile
          }
        }
      }
    }
  }
`;
