import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
};
