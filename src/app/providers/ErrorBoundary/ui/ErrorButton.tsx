import { useEffect, useState } from 'react';

export const ErrorButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button onClick={onThrow} type="button">
      Throw error
    </button>
  );
};
