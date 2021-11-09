import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DEFAULT_TITLE = 'Chase Oaks TV';
const DEFAULT_DESCRIPTION = `Chase Oaks Church is a diverse, multi-cultural, and multi-generational community in which anyone can come as they are, be transformed, and make a difference to others.`;
const DEFAULT_IMAGE =
  'https://play-lh.googleusercontent.com/DuGK5TFcC2KLxzLkLsBwVCgQC08oIB_2Lfz8J6g0NhW3QmJZlJjv4hFFETz7wKdR3VY=w3624-h1952-rw';
const DEFAULT_KEYWORDS = `Chase Oaks`;
const DEFAULT_URL = 'https://www.chaseoaks.tv/';

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
