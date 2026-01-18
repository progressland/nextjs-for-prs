import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'npm run build && env',
  rewrites: [
    routes.rewrite('/api/(.*)', 'https://backend.api.example.com/$1', {
      requestHeaders: {
        authorization: `Bearer ${deploymentEnv('github_token')}`,
      },
    }),
  ],
};
