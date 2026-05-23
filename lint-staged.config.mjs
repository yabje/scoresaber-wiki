export default {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["bunx oxfmt", "bunx oxlint --fix"],
  "*.{md,mdx}": ["bunx markdownlint --fix"],
};
