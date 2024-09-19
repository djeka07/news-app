import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const root = style({
  border: 'none',
  cursor: 'pointer',
});

export const icon = recipe({
  base: {},
  variants: {
    isInList: {
      true: {
        fill: 'var(--main-primary-color)',
      },
    },
  },
});

export const wrapperSpinner = recipe({
  base: {
    position: 'absolute',
    margin: 0,
    top: 0,
    right: 0,
    width: 10,
    height: 10,
  },
  variants: {
    success: {
      true: {
        width: 15,
        height: 15,
        borderRadius: 'var(--medium-border-radius)',
        backgroundColor: 'var(--dark-success-color)',
      },
    },
  },
});

export const motionClass = style({
  position: 'absolute',
  right: -5,
  top: -5,
});

export const actionClass = recipe({
  base: {
    width: 15,
    height: 15,
    borderRadius: 'var(--medium-border-radius)',
  },
  variants: {
    type: {
      added: {
        backgroundColor: 'var(--dark-success-color)',
      },
      removed: {
        backgroundColor: 'var(--dark-error-color)',
      },
    },
  },
});

export const spinner = style({
  width: 10,
  height: 10,
});
