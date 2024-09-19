import { ColorModeProvider } from '~/common/models/contexts';
import StylesSheet from '~/common/styles/stylesheet';
import { PanelsProvider } from '@djeka07/ui';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ColorModeProvider initial="dark">
        <head>
          <StylesSheet />
        </head>
        <body>
          <PanelsProvider>{children}</PanelsProvider>
        </body>
      </ColorModeProvider>
    </html>
  );
}
