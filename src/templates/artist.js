import React from "react";
import { graphql } from "gatsby";

// A stub to satisfy the Gatsby demon.
const Artist = ({ data }) => {
  return <div>Stub of artist page.</div>;
};

export default Artist;

export const pageQuery = graphql`
  query ArtistByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        spontaneity
      }
    }
  }
`;
