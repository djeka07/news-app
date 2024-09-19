import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  position: 'absolute',
  right: 0,
  top: 0,
});

export const button = style({
  selectors: {
    '&&&': {
      borderTopRightRadius: 'var(--medium-border-radius)',
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 'var(--medium-border-radius)',
    },
  },
});

export const buttonInner = style({
  selectors: {
    '&&&': {
      padding: 0,
    },
  },
});
