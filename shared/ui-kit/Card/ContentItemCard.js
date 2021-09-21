import React from 'react';
import PropTypes from 'prop-types';

import { apollosPropTypes } from 'shared/lib';

import { PressableBox, systemPropTypes } from '..';

import Card from './Card';
import Image from './Image';
import Styled from './ContentItemCard.styles';

function ContentItemCard(props = {}) {
  return (
    <PressableBox {...props}>
      {(pressableStateProps) => (
        <>
          <Card p="0" boxShadow="low" mb="xs" {...pressableStateProps}>
            <Image image={props.image} />
          </Card>
          <Styled.Title {...pressableStateProps}>{props.title}</Styled.Title>
        </>
      )}
    </PressableBox>
  );
}

ContentItemCard.propTypes = {
  ...systemPropTypes,
  image: apollosPropTypes.ImageMedia,
  title: PropTypes.string,
};

ContentItemCard.defaultProps = {};

export default ContentItemCard;
