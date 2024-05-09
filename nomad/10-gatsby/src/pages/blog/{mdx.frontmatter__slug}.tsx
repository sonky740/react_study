import React from 'react';
import Layout from '../../components/Layout';
import { PageProps, graphql } from 'gatsby';
import Seo from '../../components/Seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogPost({
  data,
  children,
}: PageProps<Queries.PostDetailQuery>) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="Blog Post">
      <GatsbyImage image={image!} alt={data.mdx?.frontmatter?.title!} />
      {children}
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        category
        date
        author
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.PostDetailQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
