module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("style");
    eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addWatchTarget("style");
};
