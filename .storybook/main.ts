import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {
      viteConfigPath: undefined,
    }
  },
  "staticDirs": [
    "../public",
    "../stories/assets"
  ],
  "viteFinal": async (config) => {
    // Ensure SVG files are handled properly
    config.assetsInclude = ['**/*.svg'];
    
    // Fix path resolution issues
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        external: [],
        output: {
          ...config.build.rollupOptions?.output,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.svg')) {
              return 'assets/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      };
    }

    // Add resolve configuration for better path handling
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': require('path').resolve(__dirname, '../'),
      }
    };

    return config;
  }
};
export default config;