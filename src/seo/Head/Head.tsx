import NextHead from 'next/head';
import React from 'react';

import { GoogleAnalytics } from '../GoogleAnalytics/GoogleAnalytics';

interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const Head = (props: HeadProps) => {
  const {
    ogImage = 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1644688438/og-100_tt2vpp.jpg',
    title = 'NextJS Sandbox',
    description = 'All custom components I have made and constantly trying to improve 🚀. I use them mostly in my React application, but all of them might be easily transfered and used with pure css and js.',
  } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="https://res.cloudinary.com/dpv0ukspz/image/upload/v1644688113/favicon_rg3srh.ico"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <GoogleAnalytics />
    </NextHead>
  );
};
