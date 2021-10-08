import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DEFAULT_TITLE = 'The Apollos Project';
const DEFAULT_DESCRIPTION = `The Apollos Project is an open-source initiative that empowers your church to launch your own digital products and bring your congregation closer to Jesus.`;
const DEFAULT_IMAGE =
  'https://uploads-ssl.webflow.com/5e974c89dfe70106c6183e08/5e989c0c5f5122edceab511a_Mockup__Hero-Home.png';
const DEFAULT_KEYWORDS = `Apollos Project, The Apollos Project`;
const DEFAULT_URL = 'https://apollosapp.io/';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

function SEO(props = {}) {
  const pageTitle = getPageTitle(props.title);

  return (
    <Head>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta property="og:title" content={props.title} />
      <meta name="twitter:title" content={props.title} />
      {/* Keywords */}
      <meta name="keywords" content={props.keywords} />
      {/* Description */}
      <meta name="description" content={props.description} />
      <meta property="og:description" content={props.description} />
      <meta name="twitter:description" content={props.description} />
      {/* URL */}
      <meta property="og:url" content={props.url} />
      <meta name="twitter:url" content={props.url} />
      {/* Author */}
      {props.author && (
        <>
          <meta name="author" content={props.author} />,
          <meta property="og:article:author" content={props.author} />
          <meta name="twitter:creator" content={props.author} />
        </>
      )}
      {/* Image */}
      {props.image && (
        <>
          <meta property="og:image" content={props.image} />
          <meta name="twitter:image" content={props.image} />
        </>
      )}
      {/* Video */}
      {props.video && <meta property="og:video" content={props.video} />}
      {/* Misc. */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.children}
    </Head>
  );
}

SEO.propTypes = {
  author: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  video: PropTypes.string,
};

SEO.defaultProps = {
  description: DEFAULT_DESCRIPTION,
  image: DEFAULT_IMAGE,
  keywords: DEFAULT_KEYWORDS,
  title: DEFAULT_TITLE,
  url: DEFAULT_URL,
};

export default SEO;
