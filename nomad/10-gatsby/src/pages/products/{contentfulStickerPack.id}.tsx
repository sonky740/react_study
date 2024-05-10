import React from 'react';
import Layout from '../../components/Layout';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      {image && (
        <GatsbyImage image={image} alt={data.contentfulStickerPack?.name!} />
      )}
    </Layout>
  );
}

export const data = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 450, placeholder: BLURRED)
      }
    }
  }
`;
