import React, { memo } from 'react';

import { getRouteMessageEdit } from '@/shared/consts/router';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';

interface MessagesPageProps {
  className?: string;
}

const templateId = '1';

const MessagesPage = memo(({ className }: MessagesPageProps) => (
  <main>
    <AppLink to={getRouteMessageEdit(templateId)}>
      <Button type="button">Template Editor</Button>
    </AppLink>
  </main>
));

export default MessagesPage;
