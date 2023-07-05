/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "jcarpio95",
        mongodb_password: "bpgDjVNcBDo1uQE9",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "jcarpio95",
      mongodb_password: "bpgDjVNcBDo1uQE9",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
