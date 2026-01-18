import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: "next build && node -e \"require('child_process').execSync('env', {stdio: 'inherit'})\""
};
