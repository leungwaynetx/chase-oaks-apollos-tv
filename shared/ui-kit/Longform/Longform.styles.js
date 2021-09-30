import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'shared/ui-kit';
import { TypeStyles } from 'shared/ui-kit/Typography';

const Longform = styled.div`
  ${TypeStyles.BodyText};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${themeGet('space.base')};
  }

  > p:not(:last-child),
  > ul:not(:last-child),
  > ol:not(:last-child) {
    margin-bottom: ${themeGet('space.base')};
  }

  > ul,
  > ol {
    margin-left: ${themeGet('space.base')};

    > li:not(:last-child) {
      margin-bottom: ${themeGet('space.xs')};

      > ul,
      > ol {
        margin-top: ${themeGet('space.base')};
        margin-left: ${themeGet('space.base')};

        > li:not(:last-child) {
          margin-bottom: ${themeGet('space.xs')};
        }
      }
    }
  }
  ${system}
`;

export default Longform;
