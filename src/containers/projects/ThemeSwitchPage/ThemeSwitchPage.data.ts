import { GetStaticProps } from 'next';

import { PageProps } from 'utils/sharedTypes';
import { sharedValues } from 'utils/sharedValues';

export const getStaticProps: GetStaticProps = () => {
  const head: PageProps['head'] = {
    title: 'Michal Zalobny - Theme Switch',
  };

  return {
    props: {
      head,
      inspirationName: "Gribkov's Dribbble",
      inspirationHref: 'https://dribbble.com/shots/4419357-Day-Night-Mode-Switcher',
      repoHref:
        'https://github.com/javusScriptus/next-sandbox/tree/main/src/components/ThemeSelector',
    },
    revalidate: sharedValues.ISR_TIMEOUT,
  };
};
