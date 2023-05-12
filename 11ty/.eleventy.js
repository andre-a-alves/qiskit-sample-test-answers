const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
    eleventyConfig.addPlugin(syntaxHighlight);

    const questionBase = "_src/questions"
    for (const n of Array(20).keys()) {
        const numStr = String(n + 1).padStart(2, '0');
        eleventyConfig.addPassthroughCopy(`${questionBase}/question-${numStr}/*`)
    }

    eleventyConfig.addPassthroughCopy("_src/static")
    eleventyConfig.addPassthroughCopy({
        "node_modules/purecss/build/grids-min.css": "static/grids-min.css",
        "node_modules/purecss/build/base-min.css": "static/base-min.css",
        "node_modules/purecss/build/menus-min.css": "static/menus-min.css",
        "node_modules/purecss/build/buttons-min.css": "static/buttons-min.css",
        "node_modules/purecss/build/grids-responsive-min.css": "static/grids-responsive-min.css",
        "node_modules/mathjax/es5/tex-mml-chtml.js": "static/tex-mml-chtml.js",
    })

    eleventyConfig.addCollection("pagesWithTag", function(collectionApi) {
        return function(tag) {
            return collectionApi.getFilteredByTag(tag);
        };
    });
    eleventyConfig.addCollection("pagesWithTags", function(collectionApi) {
        return function(tag1, tag2) {
            return collectionApi.getFilteredByTags(tag1, tag2);
        };
    });

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        pathPrefix: "/qiskit-sample-test-answers/",
    }
}