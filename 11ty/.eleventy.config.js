module.exports = function (eleventyConfig) {
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
        }
    }
}