module.exports = (config) => {

  // config.addFilter('markdown', markdown);
  config.addPassthroughCopy('/assets/images');
  config.addPassthroughCopy('/assets/css');
  config.addWatchTarget('assets/css');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    htmlTemplateEngine: 'njk',
		templateFormats: ['njk', 'md', 'html', 'css'],
    passthroughFileCopy: true
  };
};
