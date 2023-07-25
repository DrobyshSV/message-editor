import styles from './PageWithError.module.scss';

export const PageWithError = () => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={styles.PageWithError}>
      <p>SomethingWasWrong</p>
      <button onClick={reloadPage} type="button">
        Update page
      </button>
    </div>
  );
};
