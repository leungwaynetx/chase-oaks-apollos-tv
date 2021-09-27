import slugify from './slugify';

/**
 * note : Added additional check for title. If no title exist in the related node, pass in a separate title
 */

function getURLFromType(node, title) {
  const [type, randomId] = node?.id?.split(':');

  switch (type) {
    case 'EventContentItem': {
      return `/watch/${slugify(node.title ? node.title : title)}`;
    }
    case 'InformationalContentItem': {
      return `/watch/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    case 'MediaContentItem': {
      return `/watch/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    case 'WeekendContentItem': {
      return `/watch/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    case 'UniversalContentItem': {
      return `/watch/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    case 'ContentChannel': {
      return `/channel/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    case 'Url': {
      return node.url;
    }
    default: {
      console.warn(
        `Routing for node type ${type} not set up. Please add it to getURLFromType.js`
      );
      return '/';
    }
  }
}

export default getURLFromType;
