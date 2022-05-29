/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from 'react';

import cloudSrc from './images/cloud.svg';
import { Wrapper } from './styled/Wrapper';
import { CloudImage } from './styled/CloudImage';

interface CloudProps {
  size: number;
  posX: number;
  posY: number;
}

export const Cloud = memo<CloudProps>(props => {
  const { size, posX, posY } = props;
  return (
    <>
      <Wrapper>
        <CloudImage src={cloudSrc.src} $posX={posX} $posY={posY} $size={size} />
      </Wrapper>
    </>
  );
});

Cloud.displayName = 'Cloud';
