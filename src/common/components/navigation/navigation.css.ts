import { style } from '@vanilla-extract/css';
import media from '~/common/styles/media.css';

export const root = style({
  width: 65,
  position: 'sticky',
  height: '100vh',
  top: 0,
  bottom: 0,
  transition: '0.3s width ease-in-out',
  [media.base]: {
    [media.small.up]: {
      width: 250,
    },
  },
});

export const navigation = style({
  backgroundColor: 'var(--main-background-color)',
  boxShadow: 'var(--main-box-shadow)',
  padding: '0 10px',
  height: '100%',
});

export const li = style({});

export const item = style({
  selectors: {
    '&&': {
      color: 'var(--main-link-color)',
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      justifyItems: 'start',
      width: '100%',
      textDecoration: 'none',
      padding: '10px 10px',
      gap: 2,
      [media.base]: {
        [media.small.up]: {
          padding: '10px 10px',
        },
      },
    },
  },
});

export const bottomLi = style({
  position: 'absolute',
  bottom: 0,
});

export const truncated = style({
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '0 4px',
  display: 'none',
  [media.base]: {
    [media.small.up]: {
      display: 'block',
    },
  },
});

export const logoutButton = style({
  background: 'none',
  border: 0,
  padding: 0,
  color: 'var(--main-link-color)',
  fontFamily: 'var(--base-font-family)',
  fontSize: '1rem',
  cursor: 'pointer',
  display: 'grid',
  flexDirection: 'column',
  gap: 2,
  alignItems: 'center',
  justifyContent: 'center',
});

export const list = style({
  display: 'grid',
  listStyle: 'none',
  paddingInlineStart: 0,
  marginBlockStart: 0,
  marginBlockEnd: 0,
  [media.base]: {
    [media.small.up]: {},
  },
});

export const loginList = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const icon = style({
  fill: 'var(--main-link-color)',
  width: 20,
  height: 20,
});
