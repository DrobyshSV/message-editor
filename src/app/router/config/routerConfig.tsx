import { RouteProps } from 'react-router-dom';

import { MessageEditPage } from '@/pages/MessageEditPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  AppRoutes,
  getRouteMessageEdit,
  getRouteMessages,
} from '@/shared/consts/router';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MESSAGES]: {
    path: getRouteMessages(),
    element: <MessagesPage />,
  },
  [AppRoutes.MESSAGE_EDIT]: {
    path: getRouteMessageEdit(':id'),
    element: <MessageEditPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
