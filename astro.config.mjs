// import { insertFileName } from './src/rehype-plugins/rehype-insert-filename.mjs';
// import wrap from 'rehype-wrap-all';
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ (
  {
    markdownOptions: {
      remarkPlugins: [
        // 'remark-prism',
        // [import('remark-code-figure'), {captionOptions: {position: 'before'}}],
        // 'remark-footnotes',
        // '@silvenon/remark-smartypants',
        // 'remark-gfm'
      ],
    },
    // Set "renderers" to "[]" to disable all default, builtin component support.
    renderers: [
      '@astrojs/renderer-svelte'
    ],
    buildOptions: {
      site: "https://trainingmontage.dev/",
      sitemap: true,
    },
  }
);
