import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import media from '~/common/styles/media.css';

export const root = recipe({
  base: {
    backgroundColor: 'var(--light-background-color)',
    borderRadius: 'var(--medium-border-radius)',
    overflow: 'hidden',
  },
  variants: {
    isRemoved: {
      true: {
        position: 'relative',
        selectors: {
          '&:after': {
            position: 'absolute',
            content: 'The article has been removed',
            backgroundColor: 'var(--light-background-color)',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.9,
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            color: 'var(--main-heading-color)',
            fontSize: 'var(--large-font-size)',
            fontWeight: 'var(--bold-font-weight)',
          },
        },
      },
    },
  },
});

export const authorPill = recipe({
  base: {
    position: 'absolute',
    bottom: 16,
    backgroundColor: 'var(--dark-background-color)',
    color: 'var(--main-text-color)',
    padding: 12,
    borderRadius: 'var(--medium-border-radius)',
    fontWeight: 'bold',
    boxShadow: 'var(--main-box-shadow)',
  },
  variants: {
    position: {
      right: {
        right: 16,
      },
      left: {
        left: 16,
      },
    },
    maxWidth: {
      true: {
        maxWidth: '80%',
      },
    },
  },
});

export const content = style({
  padding: 8,
  display: 'grid',
  gap: 4,
  [media.base]: {
    [media.small.up]: {
      padding: 16,
      gap: 8,
    },
  },
});

export const dateTitleWrapper = style({
  display: 'grid',
  gap: 2,
});

export const imageWrapper = style({
  position: 'relative',
});

export const contentSkeleton = style({
  padding: 8,
  display: 'grid',
  gap: 12,
  [media.base]: {
    [media.small.up]: {
      padding: 16,
      gap: 16,
    },
  },
});

export const textSkeleton = style({
  gap: 8,
});

export const readMore = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  alignItems: 'center',
  gap: 4,
});
