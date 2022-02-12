import React, { useEffect } from 'react';

interface Props {
  isReady: boolean;
  children: React.ReactChild;
}

export const Layout = (props: Props) => {
  const { children, isReady } = props;

  useEffect(() => {
    if (isReady && !document.body.classList.contains('isReady')) {
      document.body.classList.add('isReady');
    }

    return () => {
      document.body.classList.remove('isReady');
    };
  }, [isReady]);

  return (
    <>
      {/* <div className={clsx(styles.readyWrapper, isReady && styles.readyWrapperReady)}></div>
      <div className={styles.appBackground} /> */}

      {children}
    </>
  );
};
