import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <title>{`${title}/${data.site?.siteMetadata?.title}`}</title>;
}
