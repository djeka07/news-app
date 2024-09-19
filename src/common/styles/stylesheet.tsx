'use client';

import { createStyleSheet } from '@djeka07/ui';
import { useMemo } from 'react';
import { useColorMode } from '~/common/models/hooks';
import createTheme from './';

const StylesSheet = () => {
  const [{ mode }] = useColorMode();
  const theme = useMemo(() => createTheme(mode), [mode]);
  return <>{createStyleSheet(theme)}</>;
};

export default StylesSheet;
