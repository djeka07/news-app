'use client';

import { useColorMode } from '~/common/models/hooks';
import Theme from './theme';
import { SizeKeys } from '@djeka07/ui/src/styles/typography';
import { label } from '@djeka07/ui/src/components/atoms/inputs/text-inputs/text-input.css';

type ThemeContainerProps = {
  label?: boolean;
  className?: string;
  size?: SizeKeys;
};

const ThemeContainer = ({ className, label = false, size = 'small' }: ThemeContainerProps) => {
  const [{ mode }, { toggleMode }] = useColorMode();
  return <Theme label={label ? mode : undefined} size={size} className={className} theme={mode} toggleTheme={toggleMode} />;
};

export default ThemeContainer;
