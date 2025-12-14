export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory("source");

	// Copy files to output
	eleventyConfig.addPassthroughCopy("source/**/*.jpg");
	eleventyConfig.addPassthroughCopy("source/**/*.png");
	eleventyConfig.addPassthroughCopy("source/**/*.css");
	eleventyConfig.addPassthroughCopy("source/**/*.js");

	// Create movies collection
	eleventyConfig.addCollection("movies", function(collectionApi) {
		return collectionApi.getFilteredByGlob("source/movies/*.md");
	});

	eleventyConfig.addGlobalData("layout", "base.html");
};
