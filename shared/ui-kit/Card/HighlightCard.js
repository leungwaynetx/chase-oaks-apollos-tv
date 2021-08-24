import React from 'react';

import { systemPropTypes } from 'shared/ui-kit';

import Card from './Card';
import ContentTitles from './ContentTitles';
import Image from './Image';
import Overlay from './Overlay';

function HighlightCard(props = {}) {
  return (
    <Card p="0" {...props}>
      <Image image={props.image} size={props.size} />
      <Overlay pb={props.featured ? 'l' : 'base'}>
        <ContentTitles
          title={props.title}
          body={props.body}
          featured={props.featured}
          micro={props.micro}
        />
      </Overlay>
    </Card>
  );
}

HighlightCard.propTypes = {
  ...systemPropTypes,
  image: Image.propTypes.image,
  size: Image.propTypes.size,
  title: ContentTitles.propTypes.title,
  body: ContentTitles.propTypes.body,
  featured: ContentTitles.propTypes.featured,
  micro: ContentTitles.propTypes.micro,
};

HighlightCard.defaultProps = {
  size: 'wide',
};

export default HighlightCard;
