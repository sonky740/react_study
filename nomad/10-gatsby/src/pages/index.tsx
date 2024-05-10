import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, PageProps, graphql } from 'gatsby';

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  console.log(data.allContentfulStickerPack.nodes);
  return (
    <Layout title="Main">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker, i) => {
          const image = getImage(sticker.preview?.gatsbyImageData!);
          return (
            <article key={i}>
              {image && <GatsbyImage image={image} alt={sticker.name!} />}
              {!image && <p>Image not found</p>}
              <Link to={`/products/${sticker.id}`}>
                <h2>{sticker.name}</h2>
                <h4>${sticker.price}</h4>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Main" />;
