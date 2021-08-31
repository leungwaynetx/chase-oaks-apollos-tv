import styled from 'styled-components';

import { system } from 'shared/ui-kit';

const VideoPlayer = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  > iframe {
    border: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  ${system}
`;

export default VideoPlayer;
