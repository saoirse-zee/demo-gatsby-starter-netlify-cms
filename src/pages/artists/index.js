import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h2>Number of artists: {data.allMarkdownRemark.totalCount}</h2>
        <div>
          {data.allMarkdownRemark.nodes.map((node, index) => (
            <p key={index}>
              <span>{node.frontmatter.title}</span>
              <span> </span>
              <span>{node.frontmatter.spontaneity * 100}% spontaneous</span>
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "artist" } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          templateKey
          spontaneity
        }
      }
    }
  }
`;
