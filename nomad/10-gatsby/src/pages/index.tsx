import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout title="Main">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Main" />;
