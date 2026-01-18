import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'next build',
  rewrites: [
    routes.rewrite('/test/(.*)', 'https://backend.api.example.com/$1', {
      requestHeaders: {
        authorization: `Bearer ${deploymentEnv('github_token')}`,
      },
    }),
  ],
};
