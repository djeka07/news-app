import { style } from '@vanilla-extract/css';
import media from '~/common/styles/media.css';

export const root = style({
  backgroundColor: 'var(--light-background-color)',
  borderRadius: 'var(--medium-border-radius)',
  position: 'relative',
  maxWidth: 767,
  padding: 8,
  [media.base]: {
    [media.small.up]: {
      padding: 16,
    },
  },
});

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: 8,
  [media.base]: {
    [media.small.up]: {
      gap: 16,
    },
  },
});
