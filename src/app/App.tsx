import { memo, Suspense } from 'react';

import { AppRouter } from '@/app/router';

const App = memo(() => (
  <Suspense fallback=''>
    <AppRouter />
  </Suspense>
));

export default App;
