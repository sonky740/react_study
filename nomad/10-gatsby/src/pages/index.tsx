import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  return (
    <Layout title="Main">
      <StaticImage
        src="https://images.unsplash.com/photo-1540651810471-5699df74834f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Stickers"
      ></StaticImage>
    </Layout>
  );
}

export const Head = () => <Seo title="Main" />;
