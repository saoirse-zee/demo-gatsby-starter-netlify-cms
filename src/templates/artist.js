import React from "react";
import { graphql } from "gatsby";

const Artist = ({ data }) => {
  return (
    <div>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <p>{data.markdownRemark.frontmatter.description}</p>
      <p>{data.markdownRemark.frontmatter.spontaneity * 100}% spontaneous</p>
    </div>
  );
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
