import { gql } from "apollo-server";

// typeDefs = Type Definitions
// These are all the available data types that we are able to retrieve
// But how do we tell the GraphQL Server what to retrieve when we query it?
// We do this by defining a special Query type.
export const typeDefs = gql`
  """
  This is how we tell the GraphQL Server what to retrieve when we query our single endpoint.
  The fields of this Query type are entry points into the rest of our schema.
  These are the top-level fields that our client can query for.
  """
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of Modules this track contains"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

