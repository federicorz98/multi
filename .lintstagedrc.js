export default {
  '{,*/**/}*.{md,json,yml,html,cjs,mjs,js,ts,tsx,css,scss}': ['prettier --write'],
  '{,*/**/}*.{ts,tsx}': (filenames) => [`eslint --quiet ${filenames.join(' ')}`, `npx tsc --noEmit`],
};
