export enum AppRoutes {
  MESSAGES = 'messages',
  MESSAGE_EDIT = 'message_edit',
  NOT_FOUND = 'not_found',
}

export const getRouteMessages = () => '/';
export const getRouteMessageEdit = (id: string) => `/message/${id}/edit`;
