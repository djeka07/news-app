import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import media from '~/common/styles/media.css';

export const root = recipe({
  base: {
    backgroundColor: 'var(--main-background-color)',
    padding: 16,
    display: 'grid',
    position: 'sticky',
    top: -1,
    zIndex: 1,
    gap: 12,
    borderRadius: 'var(--medium-border-radius)',
    transition: '0.3s all ease-in-out',
    [media.base]: {
      [media.xsmall.up]: {
        gridTemplateColumns: '1fr auto auto',
        gap: 8,
      },
    },
  },
  variants: {
    isSticky: {
      true: {
        marginLeft: -16,
        marginRight: -16,
        borderRadius: 0,
        boxShadow: 'var(--main-box-shadow)',
      },
    },
  },
});
