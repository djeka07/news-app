import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  backgroundColor: 'var(--main-background-color)',
  height: 240,
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
});
