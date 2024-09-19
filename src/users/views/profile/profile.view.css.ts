import { style } from '@vanilla-extract/css';
import media from '~/common/styles/media.css';

export const root = style({
  display: 'grid',
  gap: 8,
  [media.base]: {
    [media.small.up]: {
      gap: 16,
    },
  },
});
