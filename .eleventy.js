module.exports = (config) => {

  // config.addFilter('markdown', markdown);
  config.addPassthroughCopy('/assets/images');
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
