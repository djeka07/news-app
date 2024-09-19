import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gap: 8,
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, auto))',
});
