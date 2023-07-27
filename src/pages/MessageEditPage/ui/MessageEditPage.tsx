import React, { memo } from 'react';

interface MessageEditPageProps {
  className?: string;
}

const MessageEditPage = memo(({ className }: MessageEditPageProps) => (
  <main>Message edit page</main>
));

export default MessageEditPage;
