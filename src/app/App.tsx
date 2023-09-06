import { memo, Suspense } from 'react';

import { AppRouter } from '@/app/router';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';

import { ReactComponent as Add } from '../shared/assets/svg/Add.svg';

const App = memo(() => (
  <Suspense fallback=''>
    <Input label="sacasc" placeholder="efef" type="text" addonLeft={<Icon Svg={Add}/>} />
    <AppRouter />
  </Suspense>
));

export default App;
