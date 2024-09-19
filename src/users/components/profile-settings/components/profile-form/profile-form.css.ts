import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gap: 16,
});

export const buttonWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
});
