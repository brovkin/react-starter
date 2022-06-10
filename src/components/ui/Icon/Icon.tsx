import React, { FC, FunctionComponent, SVGProps } from 'react';
import cn from 'classnames';
import { ReactComponent as ReactIcon } from '@assets/icons/react.svg';

interface IconMapProps {
  [key: string]: FunctionComponent<SVGProps<SVGSVGElement>>;
}

interface IconProps {
  type: string;
  className?: string;
}

const iconMap: IconMapProps = {
  react: ReactIcon,
};

const Icon: FC<IconProps> = ({ type, className }) => {
  const Component = iconMap[type];
  return (
    <i className={cn('icon', className)}>
      <Component />
    </i>
  );
};

export default Icon;
