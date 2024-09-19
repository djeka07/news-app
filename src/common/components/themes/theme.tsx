import { css } from '@djeka07/utils';
import { iconClass, root } from './theme.css';
import { Icon, Typography } from '@djeka07/ui';
import { SizeKeys } from '@djeka07/ui/src/styles/typography';

type ThemeProps = {
  label?: string;
  theme: 'dark' | 'light';
  className?: string;
  toggleTheme: () => void;
  size?: SizeKeys;
};

const Theme = ({ theme, toggleTheme, className, size = 'large', label }: ThemeProps) => (
  <button id="theme-toggle" aria-label={theme} className={css(root, className)} onClick={toggleTheme}>
    {label && <Typography as="span">{label}</Typography>}
    <Icon className={css(iconClass, theme)} name="SunMoon" size={size} />
  </button>
);

export default Theme;
