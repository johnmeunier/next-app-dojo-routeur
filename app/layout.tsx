import '@/app/ui/global.css';
import React, { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
