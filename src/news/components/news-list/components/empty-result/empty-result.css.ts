import { style } from '@vanilla-extract/css';

export const root = style({
  backgroundColor: 'var(--main-background-color)',
  padding: 16,
  textAlign: 'center',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  justifyItems: 'center',
  alignItems: 'center',
  borderRadius: 'var(--medium-border-radius)',
});

export const icon = style({
  fill: 'var(--light-warning-color)',
});
