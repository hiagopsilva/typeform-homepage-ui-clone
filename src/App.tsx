import React from 'react';

import { FirstAndSecond, Header } from './components';
import { GlobalStyles, Main, Section, Sticky } from './styles';

const App: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>
        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>
        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
};

export default App;
