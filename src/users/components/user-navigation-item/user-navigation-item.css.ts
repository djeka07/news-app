import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  justifyItems: 'center',
  gap: 2,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
});

export const icon = style({
  fill: 'var(--main-link-color)',
  width: 20,
  height: 20,
});
