import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface RootProps {
  children: React.ReactNode;
}

export default function Root({children}: RootProps): React.ReactElement {
  return (
    <>
      {children}
      <BrowserOnly fallback={null}>
        {() => {
          const ChatWidget = require('./ChatWidget').default;
          return <ChatWidget />;
        }}
      </BrowserOnly>
    </>
  );
}
