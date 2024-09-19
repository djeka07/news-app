import { style } from '@vanilla-extract/css';
import media from '~/common/styles/media.css';

export const root = style({
  display: 'grid',
  gap: 16,
  gridTemplateColumns: '1fr',
  [media.base]: {
    [media.small.up]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    },
  },
});
