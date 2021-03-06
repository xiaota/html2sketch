import React, { FC } from 'react';
import { useElements, TestLayout } from '@docs-utils';
// @ts-ignore
import { ReactComponent as SvgLink } from './svg/symbolLink.svg';
// @ts-ignore
import { ReactComponent as Svg } from './svg/useSymbol.svg';

const SvgIcons: FC = () => {
  const { elements, ref } = useElements();

  return (
    <TestLayout elements={elements}>
      <SvgLink />
      <div ref={ref}>
        <Svg />
      </div>
    </TestLayout>
  );
};

export default SvgIcons;
