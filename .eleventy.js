module.exports = (config) => {

  // config.addFilter('markdown', markdown);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    htmlTemplateEngine: 'njk',
		templateFormats: ['njk', 'md', 'html'],
    passthroughFileCopy: true
  };
};
