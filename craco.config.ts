// eslint-disable-next-line import/no-import-module-exports
import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
