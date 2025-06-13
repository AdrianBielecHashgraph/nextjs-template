import type { NextConfig } from 'next';

if (process.env.SKIP_ENV_IMPORT !== 'true') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./src/env');
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
