import { style } from '@vanilla-extract/css';
import media from '~/common/styles/media.css';

export const root = style({
  display: 'flex',
  gridTemplateColumns: 'auto auto',
});

export const main = style({
  width: '100%',
  margin: 8,
  gap: 8,
  [media.base]: {
    [media.small.up]: {
      margin: 16,
      gap: 16,
    },
  },
});
