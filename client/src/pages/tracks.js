import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

// Define the query on the client side
const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  // useQuery is the React hook for executing queries in an Apollo app
  const { loading, error, data } = useQuery(TRACKS);

  return (
  <Layout grid>
    <QueryResult loading={loading} error={error} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  </Layout>);
};

export default Tracks;
