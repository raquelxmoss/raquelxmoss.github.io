import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export default function About({ data: { site } }) {
  return <Layout site={site}>Raquel is a person</Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
